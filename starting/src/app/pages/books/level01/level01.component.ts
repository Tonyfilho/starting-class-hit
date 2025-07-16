import { Component, ElementRef, ViewChild } from '@angular/core';

import { OperatorsComponent } from "./operators/operators.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-level01',
  imports: [ CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level01.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Level01Component {

    @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'level01-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }

}
