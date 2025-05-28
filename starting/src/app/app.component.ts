import { Component } from '@angular/core';
import { FooterComponent } from './components/body/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/body/header/header.component';
import { MainComponent } from './components/body/main/main.component';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
