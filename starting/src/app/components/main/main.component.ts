import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUpComponent } from "../../_shared/pop-up/pop-up.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, PopUpComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  {



}
