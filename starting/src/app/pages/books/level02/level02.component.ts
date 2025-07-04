import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BindingTypesComponent } from "./binding-types/binding-types.component";
import { DestructuringComponent } from "./destructuring/destructuring.component";
import { DirectivesComponent } from "./directives/directives.component";
import { PipesComponent } from "./pipes/pipes.component";
import { SpreadComponent } from "./spread/spread.component";
import { TemplateLiteralComponent } from "./template-literal/template-literal.component";
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-level02',
  imports: [CommonModule, BindingTypesComponent, DestructuringComponent, DirectivesComponent, PipesComponent,
    SpreadComponent, TemplateLiteralComponent, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level02.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Level02Component {

}
