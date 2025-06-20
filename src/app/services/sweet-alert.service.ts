import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  private baseCustomClass = {
    popup: 'swal2-popup',
    title: 'swal2-title',
    htmlContainer: 'swal2-html-container',
    confirmButton: 'swal2-confirm',
    cancelButton: 'swal2-cancel',
  };

  success(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: this.baseCustomClass,
    });
  }

  error(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
      customClass: this.baseCustomClass,
    });
  }

  info(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'info',
      confirmButtonText: 'OK',
      customClass: this.baseCustomClass,
    });
  }

  warning(title: string, text?: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      confirmButtonText: 'OK',
      customClass: this.baseCustomClass,
    });
  }

  confirm(title: string, text: string, confirmText = 'Yes', cancelText = 'Cancel') {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      customClass: this.baseCustomClass,
    });
  }

  toast(message: string, icon: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 3000) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
      customClass: {
        popup: 'swal2-toast',
      },
    });
  }

  autoClose(title: string, text?: string, icon: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 2000) {
    return Swal.fire({
      title,
      text,
      icon,
      timer: duration,
      timerProgressBar: true,
      showConfirmButton: false,
      customClass: this.baseCustomClass,
    });
  }

  prompt(title: string, inputLabel?: string, placeholder?: string, inputValue?: string) {
    return Swal.fire({
      title,
      input: 'text',
      inputLabel,
      inputPlaceholder: placeholder,
      inputValue,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      customClass: this.baseCustomClass,
    });
  }

  custom(options: any) {
    return Swal.fire({
      ...options,
      customClass: {
        ...this.baseCustomClass,
        ...(options.customClass || {}),
      },
    });
  }
}
