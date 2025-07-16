import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-object-and-arrays',
  imports: [RouterLink],
  templateUrl: './object-and-arrays.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class ObjectAndArraysComponent {
  @ViewChild('pdfContent') content!: ElementRef;

  casa = { porta: 'porta azul', quantPorta: 2, arca: { marca: 'LG', modelo: 'xpto' } };
casaList: any[] = [
  { porta: 'porta azul', quantPorta: 2, arca: { marca: 'LG', modelo: 'xpto' } },
  { porta: 'porta vermelho', quantPorta: 2, arca: { marca: 'LG', modelo: 'xpto' } },
  { porta: 'porta verde', quantPorta: 2, arca: { marca: 'LG', modelo: 'xpto' } }
];

constructor() {
  console.log("CASA", this.casa);
  console.log("CASA-Arca", this.casa.arca);
  console.log("CASA-arca-modelo", this.casa.arca['modelo']);
  console.log("CASA-porta", this.casa.porta);
  console.log("CASA-quant-porta", this.casa.quantPorta);
  console.log("Predio List", this.casaList);
  console.log("Predio List[0]", this.casaList[0].porta);

}
  downloadPDF() {
    const options = {
      filename: 'object-and-arrays-guia.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(this.content.nativeElement).save();
  }


}
