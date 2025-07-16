import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../_shared/pipes/upcase-first-word.pipe";
import { AvatarComponent } from "../avatar/avatar.component";
import { AuthGmailService } from '../../_services/auth-gmail.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, UpcaseFirstWordPipe, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   protected authGmailService = inject(AuthGmailService);

}
