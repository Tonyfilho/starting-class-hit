import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrl: './../../../angular/angular.component.css',
  imports: [FormsModule, CommonModule]
})
export class AngularDirectivesComponent {
  @ViewChild('pdfContent') content!: ElementRef;

  // Variável para @for, *ngFor
  items = ['Angular', 'React', 'Vue'];

  // Variáveis para ngSwitch
  isLoggedIn = true;
  showMessage = true;
  isActive = true;

  users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Carlos' }
  ];
  userRole = 'admin';

  downloadPDF() {
    const options = {
      filename: 'js-fundamentals-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }
}



