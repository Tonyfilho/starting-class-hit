import { Component, ElementRef, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';
import { UpcaseFirstWordPipe } from "../../../../_shared/pipes/upcase-first-word.pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-events',
  imports: [UpcaseFirstWordPipe, RouterLink],
  templateUrl: './template-events.component.html',
  styleUrl: './../../../angular/angular.component.css'
})
export class TemplateEventsComponent {
 @ViewChild('pdfContent') content!: ElementRef;

   downloadPDF() {
    const options = {
      filename: 'template-events-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }


  onClick() {
    console.log('Botão clicado!');
  }

  onMouseOver() {
    console.log('Mouse entrou no elemento.');
  }

  onMouseOut() {
    console.log('Mouse saiu do elemento.');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('Tecla liberada:', (event.target as HTMLInputElement).value);
  }

  onInput(event: Event) {
    console.log('Valor digitado:', (event.target as HTMLInputElement).value);
  }
}
