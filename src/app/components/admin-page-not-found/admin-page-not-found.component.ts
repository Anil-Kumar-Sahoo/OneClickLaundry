import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../reusable/button/button.component';
@Component({
  selector: 'app-admin-page-not-found',
  imports: [ButtonComponent],
  templateUrl: './admin-page-not-found.component.html',
  styleUrl: './admin-page-not-found.component.css'
})
export class AdminPageNotFoundComponent {
  constructor(private router: Router) { }

  goHome(): void {
    this.router.navigateByUrl('admin');
  }
}
