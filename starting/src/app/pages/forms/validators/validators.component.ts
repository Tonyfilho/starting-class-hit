import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-validators',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './validators.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class ValidatorsComponent {
  protected validatorForms: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
   this.validatorForms = this.fb.nonNullable.group({});
  }

  @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'validators-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

}
