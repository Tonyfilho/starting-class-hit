import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { IWeather } from '../../../_shared/interfaces/weather';
import { WeatherService } from '../../../_services/weather.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule, UpcaseFirstWordPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected weatherForms: UntypedFormGroup;
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";
  private justLetter: RegExp = /^[a-zA-ZÀ-ÿ\s]+$/;

  constructor(private fb: UntypedFormBuilder) {
    this.weatherForms = this.fb.nonNullable.group({
     city: ["", [Validators.required, Validators.pattern(this.justLetter)]]
    });

    /**exemplo de como acessar os controls do forms */
    // console.log("Form controls." , this.weatherForms.controls);
    // console.log("Form weatherForm." , this.weatherForms.get('city')?.getError('required'));
   
  }



  ngOnInit(): void {
    this.weatherService.getWeather2(this.localCountry).subscribe({
      next: (res) => { this.localWeatherSig.set(res) },
      error: (e) => { console.error("Error in API Weather: ", e) },
      complete: () => { },
    });
   // console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);
  }

  submit() {
   // console.log("nossa cidade ", this.weatherForms.get('city')?.value);
    this.localCountry = this.weatherForms.get('city')?.value;
    this.weatherService.getWeather(this.localCountry).subscribe({
      next:(res) => { this.localWeatherSig.set(res)},
      error:(e) => { console.error("Error in API Weather: ", e)}
    });
  }
}
