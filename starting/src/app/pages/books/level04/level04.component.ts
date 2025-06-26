import { Component } from '@angular/core';
import { PromisesComponent } from "./promises/promises.component";
import { ObservablesComponent } from "./observable01/observables.component";
import { SignalComponent } from "./signal/signal.component";
import { Observable02Component } from "./observable02/observable02.component";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-level04',
  imports: [PromisesComponent, ObservablesComponent, Observable02Component, SignalComponent, RouterModule],
  templateUrl: './level04.component.html',
  styleUrl: './level04.component.css'
})
export class Level04Component {

}
