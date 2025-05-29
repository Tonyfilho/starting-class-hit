import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './components/body/footer/footer.component';
import { HeaderComponent } from './components/body/header/header.component';
import { MainComponent } from './components/body/main/main.component';



@Component({
  selector: 'app-root',
  imports: [CommonModule,  HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
