import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';




import { DdiDataArray } from '../../../_services/mock/ddi-mock-data-array';
import { UpcaseFirstWordPipe } from '../../../_shared/pipes/upcase-first-word.pipe';
import { IDdiEn } from '../../../_shared/interfaces/iddi-en';
import { correctName, isMatch, justNumbers, justNumbersLettersDot } from '../../../_shared/validators';


@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule, UpcaseFirstWordPipe ],
  templateUrl: './signup-forms.component.html',
  styleUrl: './signup-forms.component.css'
})
export class SignUpFormsComponent implements OnInit {
  protected signupForm: UntypedFormGroup;
  protected wordCountryDdi!: IDdiEn[];
  protected localCountryDdi: IDdiEn = { name: 'Portugal', phone: '0351' };

  constructor(private fb: UntypedFormBuilder) {
    this.signupForm = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), correctName()]),
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
      ], [isMatch(), passwordVerificationF()])
    });
  }
  ngOnInit(): void {
    this.wordCountryDdi = DdiDataArray();
    /**tem q passar o objeto completo, para ter acesso ao dados completo no DDI */
    this.signupForm.get('ddi')?.setValue(this.localCountryDdi);
    this.signupForm.get('phone')?.setValue(this.localCountryDdi.phone + '-');
    this.signupForm.get('ddi')?.valueChanges.subscribe(ddi =>
      this.signupForm.get('phone')?.setValue(ddi.phone + '-'));

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

  onSubmit() {
    if (!this.signupForm.valid) {
      return this.signupForm.markAllAsTouched();
    }
    /**Envia o Form para um serviço  */
    console.log(this.signupForm.value);
    setTimeout(() => { this.signupForm.reset(); }, 2000);
    /**voltando a setar o camplo ddi */
    this.signupForm.get('ddi')?.setValue(this.localCountryDdi);
  }

}
function passwordVerificationF(): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

