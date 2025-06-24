import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { IWeather } from "../_shared/interfaces/weather";



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiUrl = "http://api.weatherapi.com/v1/current.json";
  private readonly apiKey = environment.weatherKey;

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string) {
  return  this.httpClient.get<IWeather>(`${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no`);
  };


  getWeather2 = (city: string) => {
  return  this.httpClient.get<IWeather>(`${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no`);
  };


}
