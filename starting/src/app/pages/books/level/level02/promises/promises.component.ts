import { Component, inject, OnInit } from '@angular/core';
import { PromisesService } from '../../../../../_services/promises.service';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {


  protected promisesService = inject(PromisesService);
  protected localPromise: any;



  ngOnInit(): void {
    console.log("Promise in Component: ");
    console.log("Promise in Component: ", this.promisesService.getPromise());

    console.log("promiseValue: ", this.promisesService.promiseValue);

  }


}
