import { Component } from '@angular/core';
import { ControlStructuresComponent } from "./control-structures/control-structures.component";
import { OperatorsComponent } from "./operators/operators.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level01',
  imports: [ControlStructuresComponent, OperatorsComponent, DependencyInjectionComponent, CommonModule],
  templateUrl: './level01.component.html',
  styleUrl: './level01.component.css'
})
export class Level01Component {

}
