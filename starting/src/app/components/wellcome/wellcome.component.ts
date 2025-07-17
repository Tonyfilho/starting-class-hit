import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-wellcome',
  imports: [CommonModule, RouterLink],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent {
 private authGmailService = inject(AuthGmailService);
  protected localuser: Observable<User | null> = this.authGmailService.getUser();
}
