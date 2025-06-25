import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-structures',
  imports: [CommonModule],
  templateUrl: './control-structures.component.html',
  styleUrl: './control-structures.component.css'
})
export class ControlStructuresComponent {
  age:number = 17;
  numberList = [1,2,3,4,5,6,7,8,9,10];

}
