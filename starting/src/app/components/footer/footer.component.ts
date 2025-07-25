import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';





@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  private routerinject = inject(Router); // cria a nova forma de injeção
  protected dateTime;

  // cria a  forma tradicional de injeção usado nos services ou components
  constructor(private router: Router) {
    // JS
    this.dateTime = DateTime.now();
  }

  // Construtor do Angular
  ngOnInit(): void {
    //console.log(`Eu sou Template Literal:  ${this.dateTime.day}`);
  }

  /**Uso quando tenho um botão no html que precisa mudar de rota assim que for clicado */
  changeRoute() {
    this.router.navigateByUrl('/hit-class/project');
    this.routerinject.navigateByUrl('/hit-class/project');
  };

  /**Uso quando tenho um botão no html que precisa mudar de rota assim que for clicado */
  changeRouterN = () => {
    this.router.navigate(['/hit-class/project']);
    this.routerinject.navigate(['/hit-class/project']);

  }


}
