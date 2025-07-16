import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  private authGmailService = inject(AuthGmailService);
  protected localuser: Observable<User | null> = this.authGmailService.getUser();




  logout() {
    this.authGmailService.logOut().subscribe();
  }


}
