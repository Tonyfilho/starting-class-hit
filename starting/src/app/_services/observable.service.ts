import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }


    /**Vesão básica com New Observable */
  seekData$ = (): Observable<string> => {
    return new Observable(observer => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (!success) {
          observer.error("Error: Falha ao Carregar dados!");
        }
        observer.next("Dados Carregados com Sucesso!");
        observer.complete();

      }, 1500);
    });
  }


  dummyDataObservableRxJsOf = (): Observable<string | null> => {
    return of(null).pipe(delay(1500), map(() => {
      if (Math.random() > 0.3) {
        return "Dados Carregados com success";
      }
      throw new Error('Error: Falha ao carregar Dados!')
    }));
  }
}
