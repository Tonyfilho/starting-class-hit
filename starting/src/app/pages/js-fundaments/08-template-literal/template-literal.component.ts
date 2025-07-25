import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-template-literal',
  imports: [CommonModule],
  templateUrl: './template-literal.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class TemplateLiteralComponent {

 @ViewChild('pdfContent') content!: ElementRef;

   downloadPDF() {
    const options = {
      filename: 'Template-Literal-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }
}
