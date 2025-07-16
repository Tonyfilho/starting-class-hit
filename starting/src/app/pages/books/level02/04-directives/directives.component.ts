import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class DirectivesComponent {
  protected showMessage = true;
  protected items = ["Angular", "React", "Vue"];
  protected isHighLighted = false;



  toggleMessage() {
    this.showMessage = !this.showMessage;
  }


  toggleHighLight() {
    this.isHighLighted = !this.isHighLighted;
  }
}
