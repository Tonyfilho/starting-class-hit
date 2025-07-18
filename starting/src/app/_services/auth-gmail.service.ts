import { inject, Injectable } from '@angular/core';
import { AuthInterface } from '../_shared/interfaces/auth-interface';
import { UserCredential, User, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { BehaviorSubject, from, map, Observable, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  exp: number; // timestamp (em segundos)
  iat: number;
  [key: string]: any;
}



@Injectable({
  providedIn: 'root'
})
export class AuthGmailService implements AuthInterface {
  private auth = getAuth();
  private router = inject(Router);
  private currentUser$ = new BehaviorSubject<User | null>(null);

  constructor() {
    this.getUserFromLocalStorage();
  }


  private getUserFromLocalStorage = () => {
    const storaUserParse = JSON.parse(localStorage.getItem("user") as string);
    storaUserParse ? this.currentUser$.next(storaUserParse) : null;
  }



  signIn(email: string, password: string): Observable<UserCredential> {
    const providedIn = new GoogleAuthProvider();
    const signIn = signInWithPopup(this.auth, providedIn);
    return from(signIn).pipe(tap((res) => {
      this.automaticLogout(res.user);
      /**salvando no localstorage */
      localStorage.setItem('user', JSON.stringify(res.user));
      /**salvando no Observable */
      this.currentUser$.next(res.user);
    }));

  }


  logOut(): Observable<void> {
    return from(signOut(this.auth)).pipe(tap(() => {
      this.currentUser$.next(null);
      this.router.navigateByUrl('/');
      localStorage.clear();
    }));
  }


  isAuthenticated(): boolean {
    return this.currentUser$.value !== null;
  }

  getUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }

  automaticLogout = (user: User) => {
    if (!user) {
      return;
    }
    from(user.getIdToken()).pipe(
      map((token) => jwtDecode<JwtPayload>(token))
    ).subscribe((decoded) => {
      const timeNow = Date.now() / 1000; //transformando em milissegundos
      const timeLeft = (decoded.exp - timeNow) * 1000; // transformando novamente em segundos
      if (timeLeft > 0) {
        console.log(`Token expira em ${Math.round(timeLeft / 1000)} segundos`);
        setTimeout(() => {this.logOut()}, timeLeft)
      }
    });

  }
}
