import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpcaseFirstWordPipe } from '../../../_shared/pipes/upcase-first-word.pipe';
import { ObservablesComponent } from "./observable01/observables.component";
import { Observable02Component } from "./observable02/observable02.component";
import { PromisesComponent } from "./promises/promises.component";
import { SignalComponent } from "./signal/signal.component";

@Component({
  selector: 'app-level04',
  imports: [PromisesComponent, ObservablesComponent, Observable02Component, SignalComponent, RouterModule, CommonModule, UpcaseFirstWordPipe],
  templateUrl: './level04.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Level04Component {

}
