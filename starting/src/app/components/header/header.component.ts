import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
}
