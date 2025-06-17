import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../_share/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiURL = " http://api.weatherapi.com/v1/current.json";
  private readonly apiKey = environment.weatherKey;
  constructor(private http: HttpClient) { }

  getWeather = (city: string) => {
    return this.http.get(`${this.apiURL}?key=${this.apiKey}&q=${city}&aqi=no`);
  }
  getWeather2(city: string) {
    return this.http.get<IWeather>(`${this.apiURL}?key=${this.apiKey}&q=${city}&aqi=no`);
  }

}
