import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

type PopUpType = "success" | "error";
type PopUpMessage = {
  text: string;
  type: PopUpType;
}


@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private message$ = new BehaviorSubject<PopUpMessage | null>(null);

  constructor() { }

  show = (text: string, type: PopUpType = 'success', duration = 5000) => {
    this.message$.next({ text, type });
    setTimeout(() => this.clear(), duration);
  };



  clear = () => {
    this.message$.next(null);
    this.message$.pipe(take(1));
  };

  getMessage$ = () => {
    return this.message$.asObservable();

  }


}
