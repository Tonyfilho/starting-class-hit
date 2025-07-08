import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { IWeather } from '../../../_shared/interfaces/weather';
import { WeatherService } from '../../../_services/weather.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected weatherForms: UntypedFormGroup;
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";

  constructor(private fb: UntypedFormBuilder) {
    this.weatherForms = this.fb.nonNullable.group({
     city: [""]
    });
  }



  ngOnInit(): void {
    this.weatherService.getWeather2(this.localCountry).subscribe({
      next: (res) => { this.localWeatherSig.set(res), console.log("Res In WeatherComponent: ", this.localWeatherSig()) },
      error: (e) => { console.error("Error in API Weather: ", e) },
      complete: () => { },
    });
    console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);
  }

  submit() {
    console.log("nosso cidade ", this.weatherForms.get('city')?.value);
    this.localCountry = this.weatherForms.get('city')?.value;
    this.weatherService.getWeather(this.localCountry).subscribe({
      next:(res) => { this.localWeatherSig.set(res)},
      error:(e) => { console.error("Error in API Weather: ", e)}
    });
  }
}
