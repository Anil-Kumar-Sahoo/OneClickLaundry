import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  private toastOptions = {
    timeOut: 1500,
    progressBar: true,
    progressAnimation: 'increasing' as const,
    closeButton: true,
  };

  success(message: string, title = 'Success') {
    this.toastr.success(message, title, this.toastOptions);
  }

  error(message: string, title = 'Error') {
    this.toastr.error(message, title, this.toastOptions);
  }

  warning(message: string, title = 'Warning') {
    this.toastr.warning(message, title, this.toastOptions);
  }

  info(message: string, title = 'Info') {
    this.toastr.info(message, title, this.toastOptions);
  }
}
