import { Component } from '@angular/core';
import { ControlStructuresComponent } from "./control-structures/control-structures.component";
import { OperatorsComponent } from "./operators/operators.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-level01',
  imports: [ControlStructuresComponent, OperatorsComponent, DependencyInjectionComponent, CommonModule, RouterLink],
  templateUrl: './level01.component.html',
  styleUrl: './../level04/level04.component.css'
})
export class Level01Component {

}
