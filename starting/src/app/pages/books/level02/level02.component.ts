import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BindingTypesComponent } from "./binding-types/binding-types.component";
import { DestructuringComponent } from "./destructuring/destructuring.component";
import { DirectivesComponent } from "./directives/directives.component";
import { PipesComponent } from "./pipes/pipes.component";
import { SpreadComponent } from "./spread/spread.component";
import { TemplateLiteralComponent } from "./template-literal/template-literal.component";
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-level02',
  imports: [CommonModule, BindingTypesComponent, DestructuringComponent, DirectivesComponent, PipesComponent,
    SpreadComponent, TemplateLiteralComponent, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level02.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Level02Component {
  @ViewChild('pdfContent') content!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'level02-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }
}
