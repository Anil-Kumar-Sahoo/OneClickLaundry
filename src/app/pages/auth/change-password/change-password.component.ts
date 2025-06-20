import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/reusable/button/button.component';
import { InputComponent } from '../../../components/reusable/input/input.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  changePasswordForm = new FormGroup(
    {
      newPassword: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    },
    { validators: this.passwordMatchValidator }
  );

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  get passwordMismatch(): boolean | undefined {
    return (
      this.changePasswordForm.hasError('passwordMismatch') &&
      this.confirmPassword?.touched
    );
  }

  onChangePassword(): void {
    if (this.changePasswordForm.valid) {
      const newPassword = this.changePasswordForm.value.newPassword;
      console.log('Changing password to:', newPassword);
    } else {
      this.changePasswordForm.markAllAsTouched();
    }
  }

  private passwordMatchValidator(
    group: AbstractControl
  ): ValidationErrors | null {
    const { newPassword, confirmPassword } = group.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }
}
