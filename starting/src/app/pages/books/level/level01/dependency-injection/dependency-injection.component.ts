import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependency-injection',
  imports: [CommonModule],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css'
})
export class DependencyInjectionComponent {
  private router = inject(Router);

  changeRouter = () => {
    this.router.navigateByUrl('/hit');
  }
}
