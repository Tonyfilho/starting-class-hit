import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-level03',
  imports: [CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level03.component.html',
   styleUrl: './../../angular/angular.component.css'
})
export class Level03Component {

}
