import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "./components/body/body.component";


@Component({
  selector: 'app-root',
  imports: [BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
