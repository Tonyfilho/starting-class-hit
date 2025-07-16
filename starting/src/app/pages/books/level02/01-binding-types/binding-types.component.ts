import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';
/**Falando sobre Type, tipagem do TypeScript */
type user = {
  name: string;
  email: string;
  isAdmin: boolean;
  avatar?: string;
}


@Component({
  selector: 'app-binding-types',
  imports: [CommonModule, FormsModule],
  templateUrl: './binding-types.component.html',
  styleUrl: './../../../angular/angular.component.css'
})
export class BindingTypesComponent {
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

  protected user: user = { name: 'Tony', email: 'oficinadosdrones@gmail.com', isAdmin: true, avatar: "./../../../../../assets/img/avatar/01_Antonio Filho.png" }
}
