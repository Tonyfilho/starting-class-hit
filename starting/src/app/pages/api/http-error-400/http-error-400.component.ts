import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-http-error-400',
  imports: [CommonModule, RouterLink],
  templateUrl: './http-error-400.component.html',
  styleUrl: './../http-error-500/http-error-500.component.css'
})
export class HttpError400Component {

}
