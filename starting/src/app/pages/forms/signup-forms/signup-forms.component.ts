import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';




import { Router } from '@angular/router';
import { DdiDataArray } from '../../../_services/mock/ddi-mock-data-array';
import { IDdiEn } from '../../../_shared/interfaces/iddi-en';
import { correctName, isMatch, justNumbers, justNumbersLettersDot, passwordVerification } from '../../../_shared/validators';
import { ImageCompressService } from '../../../_shared/image-compress/image-compress.service';


@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-forms.component.html',
  styleUrl: './signup-forms.component.css'
})
export class SignUpFormsComponent implements OnInit {

  protected router = inject(Router);
  protected signupForm: UntypedFormGroup;
  protected wordCountryDdi!: IDdiEn[];
  protected localCountryDdi: IDdiEn = { name: 'Portugal', phone: '0351' };
  protected imagePreview: string | null = null;

  constructor(private fb: UntypedFormBuilder, private imageCompress: ImageCompressService) {
    this.signupForm = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), correctName()]),
      photoURL: new FormControl(''),
      street: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, justNumbersLettersDot()]),
      ddi: new FormControl(''),
      phone: new FormControl('', [Validators.required, justNumbers()]),
      emails: new FormArray([
        new FormControl('', [Validators.required, Validators.email]),
        new FormControl('', [Validators.required])
      ], [isMatch()]),
      passwords: new FormArray([
        new FormControl('', [Validators.required]),
        new FormControl('', [Validators.required])
      ], [isMatch(), passwordVerification()])
    });
  }
  ngOnInit(): void {
    this.wordCountryDdi = DdiDataArray();
    /**tem q passar o objeto completo, para ter acesso ao dados completo no DDI */
    this.signupForm.get('ddi')?.setValue(this.localCountryDdi);
    this.signupForm.get('phone')?.setValue(this.localCountryDdi?.phone + '-');
    this.signupForm.get('ddi')?.valueChanges.subscribe(ddi =>
      this.signupForm.get('phone')?.setValue(ddi?.phone + '-'));

    // this.signupForm.get('emails')?.events.subscribe(e => console.log("required", e.source.getError('required'), 'emails ' + e.source.getError('email')));
  }

  get emailRequiredError() {
    const emailsArray = this.signupForm.get('emails') as FormArray;
    // Verifica se o primeiro ou o segundo email têm erro 'required'
    return emailsArray.at(0).hasError('required') || emailsArray.at(1).hasError('required');
  }

  get emailTypedError() {
    const emailsArray = this.signupForm.get('emails') as FormArray;
    return emailsArray.at(0).hasError('email') || emailsArray.at(1).hasError('emails');
  }


  get passwordRequiredError() {
    const passwordArray = this.signupForm.get('passwords') as FormArray;
    return passwordArray.at(0).hasError('required') || passwordArray.at(1).hasError('required');
  }


  get passwords() {
    return this.signupForm.get('passwords') as FormArray;
  }

  get email() {
    return this.signupForm.get('emails') as FormArray;
  }
  onSubmit() {
    console.log(this.signupForm.value);
    if (!this.signupForm.valid) {
      return this.signupForm.markAllAsTouched();
    }
    /**Envia o Form para um serviço  */
    console.log(this.signupForm.value);
  }


  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    /* aqui aplenas pega o arquivo sem compressão */
     /*  if (file) {
        const reader = new FileReader();
        reader.onload = () => this.imagePreview = reader.result as string;
        reader.readAsDataURL(file);

      }*/

     this.imageCompress.compressImage(file).subscribe(image => {this.signupForm.get('photoURL')?.setValue(image)});
  }


  cleanForms() {
    /**voltando a setar o camplo ddi */
    setTimeout(() => { this.signupForm.get('ddi')?.setValue(this.localCountryDdi); }, 2000);
    this.signupForm.reset();

  }
}


