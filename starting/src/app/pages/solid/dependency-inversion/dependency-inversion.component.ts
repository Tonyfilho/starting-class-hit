import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-dependency-inversion',
  imports: [RouterLink],
  templateUrl: './dependency-inversion.component.html',
  // styleUrl: './../single-responsibility/single-responsibility.component.css'
  styleUrl: './../../angular/angular.component.css'
})
export class DependencyInversionComponent {
  @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'dependency-inversion-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }
}
