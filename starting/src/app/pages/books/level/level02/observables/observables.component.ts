import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { ObservableService } from '../../../../../_services/observable.service';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent {

  protected promisesService = inject(ObservableService);
  protected localLoad = false;
  protected localMessage: string = '';
  protected localError: string = '';





  loadDataRxJs = () => {};

  
  loadData() {

  }
}
