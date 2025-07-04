import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { IWeather } from '../../../_shared/interfaces/weather';
import { WeatherService } from '../../../_services/weather.service';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";

  ngOnInit(): void {

    this.weatherService.getWeather2(this.localCountry).subscribe({
      next: (res) => { this.localWeatherSig.set(res), console.log("Res In WeatherComponent: ", this.localWeatherSig()) },
      error: (e) => { console.error("Error in API Weather: ", e) },
      complete: () => { },
    });
    console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);


  }
}
