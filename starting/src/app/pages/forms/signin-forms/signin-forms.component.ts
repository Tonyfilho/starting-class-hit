import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthGmailService } from '../../../_services/auth-gmail.service';

@Component({
  selector: 'app-signinforms',
  imports: [FormsModule, CommonModule],
  templateUrl: './signin-forms.component.html',
  styleUrl: './signin-forms.component.css'
})
export class SigninformsComponent {
  protected router = inject(Router);
  protected gmailService = inject(AuthGmailService);
  email: string = '';
  password: string = '';
  isValid!: boolean;



  goBack(): void {
    this.router.navigateByUrl("/");
  }

  clearFields(): void {
    this.email = '';
    this.password = '';
  }
  onSubmit(form: any): void {
    if (!form.valid) {
      this.isValid = false
    }
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  gmailAuthentication() {
      this.gmailService.signIn(this.email, this.password).subscribe({
      next: (res) => {console.log("Data From Google: ", res.user), this.router.navigate(['/wellcome'])},
      error: (e) => {console.error("Error in Gmail Authentication"), this.router.navigateByUrl('/')}
    });
  }
}




