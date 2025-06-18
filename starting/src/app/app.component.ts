import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { WeatherService } from './_services/weather.service';
import { ReqresService } from './_services/reqres.service';




@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private weather: WeatherService, private reqresService: ReqresService) {
    //  this.weather.getWeather("Lisbon").subscribe({
    //   next: (res) => {console.log("RES: ", res)},
    //   error: (e) => {console.error("Error: ", e)},
    //   complete: () => console.log("fim da Subscrição")
    //  });


    // this.reqresService.getDataReqresByGet().subscribe(
    //   {
    //     next: (res) => { console.log("Belchior ",  res)},
    //     error: (e) => { console.error("Error: ", e) },
    //     complete: () => console.log("fim da Subscrição")
    //   }
    // );

    // this.reqresService.getDataReqresByPost(2).subscribe(      {
    //     next: (res) => { console.log("Belchior ",  res)},
    //     error: (e) => { console.error("Error: ", e) },
    //     complete: () => console.log("fim da Subscrição")
    //   }
    // );



  }


}
