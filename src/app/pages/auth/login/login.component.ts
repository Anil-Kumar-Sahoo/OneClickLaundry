import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthFormWrapperComponent } from '../../../components/reusable/auth-form-wrapper/auth-form-wrapper.component';
import { ButtonComponent } from '../../../components/reusable/button/button.component';
import { InputComponent } from '../../../components/reusable/input/input.component';
import { SweetAlertService } from '../../../services/sweet-alert.service';
import { ToasterService } from '../../../services/toaster.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthFormWrapperComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    InputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private swal: SweetAlertService,
    private toaster: ToasterService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/),
      ]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log(this.loginForm.value);
      this.swal.success('Check Email for Varification').then(() => {
        this.router.navigate(['admin/dashboard']);
        this.toaster.success('Sucessfully Login');
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
