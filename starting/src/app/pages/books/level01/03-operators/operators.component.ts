import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-operators',
  imports: [CommonModule],
  templateUrl: './operators.component.html',
  styleUrl: './../../../angular/angular.component.css'
})
export class OperatorsComponent implements OnInit {

   @ViewChild('pdfContent') content!: ElementRef;

   downloadPDF() {
    const options = {
      filename: 'js-fundamentals-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

  
  /** Operador Logico (||) operador OR*/
  /**Descrição: Retorna o primeiro valor Verdadeiro encontrado ou  o útimo valor se todos forem Falso */
  a = 0;
  b = null;
  c = 'Óla';
  resultadoLogico = this.a || this.b || this.c;


  /** Operador de Coalescência  Nula (??)
   * Nullish Coalescing Operator.
   * Descrição: Retornar o valor da direita APENAS se o valor da esquerda for NULL ou UNDEFINED.
  */
 valor1 = null;
 valor2 = undefined;
 valor3 = 0;
 valor4 = 'Texto';
 resultadorCoalescencia = this.valor1 ?? this.valor2 ?? this.valor3 ?? this.valor4 ;

 /**Operador ternario no Ts,
  * Descrição: Uma Expressão condicional em uma unica linha   *
 */
idade = 18;
resultadoTernario = this.idade >= 18 ? 'É Maior' : 'É Menor';

/**Operador de Atribuição Condicional (?)
 * nome: Opttional Chaining, Elves.
 * Descrição: Verifica se uma propriedade  ou metodo existe antes de acessá-lo e evita errors
*/
resultadoAtribuicaoContidional = {
  nome: 'João',
  endereco: {cidade: 'Lisboa'},
  contato: {telefone: undefined}
};


/**Operador de Negação (!)
 * Nome: Logical NOT
 * descrição:  Inverte o valor booleano
*/
/**Operador de DUPLA Negação  (!!)
 * Nome: Double NOT
 * Descição Converte um valor para um booleano
*/
operadorNegacao = false;
operadorNegacaoNumero = 0;



ngOnInit(): void {
   console.log(this.resultadoAtribuicaoContidional?.endereco?.cidade);  // Saída: "Lisboa"
    console.log(this.resultadoAtribuicaoContidional?.contato?.telefone); // Saída: undefined Explicação: Se qualquer parte da cadeia for undefine
}


}
