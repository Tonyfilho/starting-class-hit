import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {
protected promise  = new Promise(resolve => resolve('Nossa Promise !'));
protected promiseValue: any = null;
  constructor() {
    this.promise.then(valeu => console.log("Promise in Service: ", valeu));
   }


getPromise() {
  this.promise.then(res => this.promiseValue = res + ' Agora foi modificada');
}



}
