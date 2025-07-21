import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGmailService } from './_services/auth-gmail.service';




@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authGmailService: AuthGmailService) {
    /**Senão por setTimeout() não funciona */
    setTimeout(() =>this.authGmailService.automaticLogout(), 2000 );
  }


}
