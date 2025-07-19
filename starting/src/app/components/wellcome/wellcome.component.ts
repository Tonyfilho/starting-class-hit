import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { UpcaseFirstWordPipe } from "../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-wellcome',
  imports: [CommonModule, UpcaseFirstWordPipe],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent {
  private authGmailService = inject(AuthGmailService);
  protected router = inject(Router);
  protected localuser: Observable<User | null> = this.authGmailService.getUser();


}
