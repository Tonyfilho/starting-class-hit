import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {
  protected promise = new Promise(resolve => resolve('Nossa Promise !'));
  promiseValue: any = null;
  constructor() {
    this.promise.then(valeu => console.log("Promise in Service: ", valeu));
  }


  getPromise() {
    this.promise.then(res => this.promiseValue = res + ' Agora foi modificada');
  }


  seekRandomicData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Simulando uma operação assíncrona (como uma chamada HTTP)
      setTimeout(() => {
        const sucess = Math.random() > 0.3; //70% de chance de sucesso
        if (!sucess) {
          reject('Erro: Falha ao carregar dados!');
        }
          resolve('Dados carregados com sucesso!')

      },1500); // Atraso de 1.5 segundos para simular operação assíncrona

    });
  }


}
