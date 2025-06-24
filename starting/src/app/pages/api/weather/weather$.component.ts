import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { IWeather } from '../../../_shared/interfaces/weather';
import { WeatherService } from '../../../_services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather$.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  protected localWeather$?: Observable<IWeather>;
  protected localCountry = "Lisbon";

  ngOnInit(): void {
    this.localWeather$ = this.weatherService.getWeather(this.localCountry);
  }
}
