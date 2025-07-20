import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-destructuring',
  imports: [CommonModule],
  templateUrl: './destructuring.component.html',
  styleUrl: './../../../angular/angular.component.css'
})
export class DestructuringComponent {
  /**A desestruturação (destructuring) é uma sintaxe que permite extrair valores de objetos
   * ou arrays de forma mais concisa. Vou explicar cada parte do seu código: */
 @ViewChild('pdfContent') content!: ElementRef;

   downloadPDF() {
    const options = {
      filename: 'binding-types-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }



}
