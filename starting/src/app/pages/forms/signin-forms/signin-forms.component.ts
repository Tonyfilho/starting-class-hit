import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signinforms',
  imports: [FormsModule,CommonModule ],
  templateUrl: './signin-forms.component.html',
  styleUrl: './signin-forms.component.css'
})
export class SigninformsComponent {
  protected router = inject(Router);
  email: string = '';
  password: string = '';


  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }

  goBack(): void {
   this.router.navigateByUrl("/");
  }

  clearFields(): void {
    this.email = '';
    this.password = '';
  }

}




