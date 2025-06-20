import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReqresService } from './_services/reqres.service';




@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  reqresService = inject(ReqresService);


  ngOnInit(): void {
    // this.reqresService.getDataReqresByGet().subscribe(
    //   {
    //     next: (res) => { console.log("Lembre-se Belchior: ", res.data[3].first_name ) },
    //     error: (e) => { console.error("Error: ", e) },
    //     complete: () => { }
    //   }
    // );
  }
}
