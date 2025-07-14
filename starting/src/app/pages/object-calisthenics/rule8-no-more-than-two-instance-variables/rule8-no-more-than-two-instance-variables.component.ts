import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-rule8-no-more-than-two-instance-variables',
  imports: [RouterLink],
  templateUrl: './rule8-no-more-than-two-instance-variables.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Rule8NoMoreThanTwoInstanceVariablesComponent {

    @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'rule8-no-more-than-two-instance-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

}
