import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import html2pdf from 'html2pdf.js';
import { AuthGmailService } from '../../../../_services/auth-gmail.service';


@Component({
  selector: 'app-signal',
  imports: [CommonModule, RouterLink],
  templateUrl: './signal.component.html',
  styleUrl: './../../../angular/angular.component.css'
})
export class SignalComponent {
  protected authGmailService = inject(AuthGmailService);
 @ViewChild('pdfContent') content!: ElementRef;

   downloadPDF() {
    const options = {
      filename: 'Signal-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

}
