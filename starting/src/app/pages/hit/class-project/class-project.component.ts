import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-project',
  imports: [CommonModule],
  templateUrl: './class-project.component.html',
  styleUrl: './../home/home.component.css'
})
export class ClassProjectComponent {
  private router = inject(Router);
 
goBack() {
    this.router.navigateByUrl('/home');
}
}
