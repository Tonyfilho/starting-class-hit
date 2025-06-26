import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  imports: [CommonModule],
  templateUrl: './destructuring.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class DestructuringComponent {
  /**A desestruturação (destructuring) é uma sintaxe que permite extrair valores de objetos
   * ou arrays de forma mais concisa. Vou explicar cada parte do seu código: */
  protected nome!: string;
  protected idade!: string | number;
  protected apelido!: string;
  protected email!: string;
  protected email2!: string;
  protected primeiro!: number
  protected segundo!: number;


  constructor() {
    const pessoa = {
      nome: "tony",
      idade: 40,
      cidade: 'Santana',
      apelido: "mutiz",
      email: ""
    };
    /**Desestruturação com nome iquais */
    ({ nome: this.nome, idade: this.idade } = pessoa);
    console.log("Desestruturação com nome iguais:  ", this.nome, this.idade);

    /**Desestruturação com valor padrão */
    ({apelido: this.apelido, email: this.email = "sem@email.com"} = pessoa);
    console.log("Desestruturação com valor Padrão:  ", this.apelido, this.email);

    /**Array */
    const numeros = [10,20,30];

    [this.primeiro, this.segundo] = numeros;

    console.log("Array: 1º: ", this.primeiro, '2º: ', this.segundo);


  }



}
