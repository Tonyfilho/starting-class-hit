import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  imports: [CommonModule],
  templateUrl: './spread.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class SpreadComponent implements OnInit{
  protected numerosOriginal = [1,2,3];
  protected numerosComSpread: any = [];
  protected pessoaOriginal = {name: 'tony', age: 40};
  protected pessoaComSpread: any  = {};
  protected pessoaComSpreadClone: any  = {};


  ngOnInit(): void {
   this.numerosComSpread = [...this.numerosOriginal, 4, 5];
   this.pessoaComSpread = {...this.pessoaOriginal};
   this.pessoaComSpreadClone = {...this.pessoaComSpread, address: 'estrada regional 101'};
  }

}
