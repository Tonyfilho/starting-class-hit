import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PopUpService } from './pop-up.service';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {

  protected popUpService = inject(PopUpService);
}
