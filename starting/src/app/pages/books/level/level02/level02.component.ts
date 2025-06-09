import { Component } from '@angular/core';
import { PromisesComponent } from "./promises/promises.component";
import { ObservablesComponent } from "./observables/observables.component";
import { SignalComponent } from "./signal/signal.component";

@Component({
  selector: 'app-level02',
  imports: [PromisesComponent, ObservablesComponent, SignalComponent],
  templateUrl: './level02.component.html',
  styleUrl: './../level01/level01.component.css'
})
export class Level02Component {

}
