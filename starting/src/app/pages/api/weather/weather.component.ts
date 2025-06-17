import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../../_services/weather.service';
import { IWeather } from '../../../_share/interfaces/weather';

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
      next: (result) => {
        this.localWeatherSig.set(result)
        console.log("Res In WeatherComponent: ", this.localWeatherSig());
      },
      error: (e) => { console.error("Error in API Weather: ", e) }
    },
    );
    console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig());
  }
}
