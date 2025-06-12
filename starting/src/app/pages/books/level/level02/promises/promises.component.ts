import { Component, inject, OnInit } from '@angular/core';
import { PromisesService } from '../../../../../_services/promises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promises',
  imports: [CommonModule],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {


  protected promisesService = inject(PromisesService);
  protected localPromise: any;
  protected localLoad = false;
  protected localMessage: string = '';
  protected localError: string = '';



  ngOnInit(): void {
    console.log("Promise in Component: ");
    console.log("Promise in Component: ", this.promisesService.getPromise());
    console.log("promiseValue: ", this.promisesService.promiseValue);

  }
  /*********************2º Exemplo */
  loadData() {
    this.localLoad = true;
    this.promisesService.seekRandomicData().then((res) => {
      this.localMessage = res;
      this.localLoad = false;
    }).catch((err) => {
      this.localError = err;
      console.error(err);
      this.localLoad = false;
    });
  }


  /**
   * Método async:

 O método carregarDados() é marcado com async, o que permite usar await dentro dele

 Isso faz com que o método retorne implicitamente uma Promise

 Sintaxe await:

 Substitui o .then(), fazendo o código esperar até a Promise ser resolvida

 O código parece síncrono, mas mantém o comportamento assíncrono

 Tratamento de erros:

 Usamos try/catch em vez de .catch()

 Mais natural e similar ao tratamento de erros síncrono

 Adicionei um bloco finally que sempre executa, independente de sucesso ou erro

 Vantagens:

 Código mais limpo e linear

 Mais fácil de ler e entender

 Melhor encadeamento de operações assíncronas

 Tratamento de erros mais intuitivo
   */

  async loadData2() {

    this.localLoad = true;
    try {
      this.localMessage = await this.promisesService.seekRandomicData();
    } catch (error) {
      this.localError = error as string;
    } finally {
      this.localLoad = false;

    }
  }

}
