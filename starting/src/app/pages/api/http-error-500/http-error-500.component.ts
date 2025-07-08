import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-http-error-500',
  imports: [CommonModule, RouterLink],
  templateUrl: './http-error-500.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class HttpError500Component {

}
