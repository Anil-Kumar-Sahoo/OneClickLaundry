import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthFormWrapperComponent } from '../../../components/reusable/auth-form-wrapper/auth-form-wrapper.component';
import { InputComponent } from '../../../components/reusable/input/input.component';
import { ButtonComponent } from '../../../components/reusable/button/button.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AuthFormWrapperComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });

  get email() { return this.forgotPasswordForm.get('email'); }

  onSendOtp(): void {
    if (this.forgotPasswordForm.valid) {
      console.log('Send OTP to:', this.forgotPasswordForm.value.email);
      // integrate API call here
    } else {
      this.forgotPasswordForm.markAllAsTouched();
    }
  }
}
