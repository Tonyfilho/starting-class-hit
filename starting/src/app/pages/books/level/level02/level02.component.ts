import { Component } from '@angular/core';
import { PromisesComponent } from "./promises/promises.component";
import { ObservablesComponent } from "./observable01/observables.component";
import { SignalComponent } from "./signal/signal.component";
import { Observable02Component } from "./observable02/observable02.component";

@Component({
  selector: 'app-level02',
  imports: [PromisesComponent, ObservablesComponent, Observable02Component, SignalComponent],
  templateUrl: './level02.component.html',
  styleUrl: './../level01/level01.component.css'
})
export class Level02Component {

}
