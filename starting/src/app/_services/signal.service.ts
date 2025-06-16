import { Injectable, signal, Signal, WritableSignal, } from '@angular/core';
import { DummyObservableService } from './observable.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  localToSignal: Signal<string | undefined>;
  name: WritableSignal<string | undefined> = signal<string | undefined>(undefined);
 dummySignal: WritableSignal<string | undefined> = signal<string>("Wellcome Signal");


 
  constructor(private dummyObservableService: DummyObservableService) {
    this.localToSignal = toSignal(dummyObservableService.dummyAsyncObservable());
    this.name.set("Tony");
  }


  // getDummySig = () => {
  //   setTimeout(() => {
  //     return this.dummySignal.set("Wellcome Signal");
  //   }, 1000)

  // }



}
