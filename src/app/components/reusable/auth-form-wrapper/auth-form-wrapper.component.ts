import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form-wrapper',
  imports: [CommonModule],
  templateUrl: './auth-form-wrapper.component.html',
  styleUrl: './auth-form-wrapper.component.css'
})
export class AuthFormWrapperComponent {
  @Input() formTitle: string = 'Form';
  @Input() formSubTitle?: string;
  @Input() width: string = '45rem';
}
