import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-level03',
  imports: [CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level03.component.html',
   styleUrl: './../../angular/angular.component.css'
})
export class Level03Component {
  @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'level03-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }
}
