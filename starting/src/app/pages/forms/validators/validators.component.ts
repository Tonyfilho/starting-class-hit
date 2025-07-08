import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-validators',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './validators.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class ValidatorsComponent {
  protected validatorForms: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
   this.validatorForms = this.fb.nonNullable.group({});
  }



}
