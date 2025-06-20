import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../reusable/button/button.component';

@Component({
  selector: 'app-public-page-not-found',
  imports: [ButtonComponent],
  templateUrl: './public-page-not-found.component.html',
  styleUrl: './public-page-not-found.component.css'
})
export class PublicPageNotFoundComponent {
  constructor(private router: Router) { }

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
