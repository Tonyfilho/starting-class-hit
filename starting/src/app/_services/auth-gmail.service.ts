import { inject, Injectable, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredential, getAuth, GoogleAuthProvider, signInWithPopup, signOut, User, UserCredential } from 'firebase/auth';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, catchError, from, map, Observable, of, tap } from 'rxjs';
import { AuthInterface } from '../_shared/interfaces/auth-interface';

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
  private angularV: string | null;


  constructor() {
    this.getUserFromLocalStorage();
    this.angularV = ' Version.' + VERSION.full;
  }


  angularVersion(): string | null {
    return this.angularV;
  }


  private getUserFromLocalStorage = () => {
    const storaUserParse = JSON.parse(localStorage.getItem("user") as string);
    storaUserParse ? this.currentUser$.next(storaUserParse) : null;
  }



  signIn(email: string, password: string): Observable<UserCredential> {
    const providedIn = new GoogleAuthProvider();
    const signIn = signInWithPopup(this.auth, providedIn);
    return from(signIn).pipe(tap((res) => {
      // this.automaticLogout(); //startado no AppComponent
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

  /**Postop no App-component dentro de um setTimeout() */
  automaticLogout = () => {
    let user = this.auth.currentUser;
    if (!user) {
      console.log("user Autenticado ?  ", user);
      return;
    }
    from(user.getIdToken()).pipe(
      map((token) => jwtDecode<JwtPayload>(token)),
      catchError(err => {
        console.error("Error ai decodifciar token: ", err);
        return of(null)
      })
    ).subscribe((decoded) => {
      if (!decoded || !decoded.exp) {
        console.log("token invalido ou sem tempo de expiração")
        this.logOut().subscribe();
        return;
      }
      const timeNow = Math.floor(Date.now() / 1000); //transformando em segundos
      const timeLeft = (decoded.exp - timeNow) * 1000; // transformando novamente em segundos
      if (timeLeft <= 0) {
        console.log("token já expirado")
        this.logOut().subscribe();
        return;
      }

      console.log(`Token expira em ${Math.round(timeLeft / 1000)} segundos`);
      setTimeout(() => { this.logOut().subscribe() }, timeLeft)
    });
  }
}
