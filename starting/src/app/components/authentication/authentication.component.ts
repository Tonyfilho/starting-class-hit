import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UpcaseFirstWordPipe } from '../../_shared/pipes/upcase-first-word.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { PopUpService } from '../../_shared/pop-up/pop-up.service';
import { emailVerification, passwordVerification } from '../../_shared/validators';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule, UpcaseFirstWordPipe],
  templateUrl: './../../pages/forms/signin-forms/signin-forms.component.html',
  styleUrl: './../../pages/forms/signin-forms/signin-forms.component.css'
})
export class AuthenticationComponent {

  protected router = inject(Router);
  private popUpService = inject(PopUpService);
  protected gmailService = inject(AuthGmailService);
  protected signInForms: UntypedFormGroup;
  isValid!: boolean;

  constructor(private fb: UntypedFormBuilder) {
    this.signInForms = this.fb.nonNullable.group({
      email: ['', [Validators.required, emailVerification()]],
      password: ['', [Validators.required, passwordVerification()]]
    })
  }

  goBack(): void {
    this.router.navigateByUrl("/");
  }


  onSubmit(): void {
    if (!this.signInForms.valid) {
      this.isValid = false
    }

  }

  gmailAuthentication() {
    const email = this.signInForms.get("email")?.value;
    const password = this.signInForms.get("password")?.value;
    this.gmailService.signIn(email, password).subscribe({
      next: (res) => { console.log("Data From Google: ", res.user), this.router.navigate(['/e-book/angular/wellcome']) },
      error: (e) => { console.error("Error in Gmail Authentication"), this.popUpService.show(e.message, 'error', 7000), this.router.navigateByUrl('/') }
    });
  }

    gmailSigout() {
    this.gmailService.logOut().subscribe();
  }
}
