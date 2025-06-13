import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
})
export class DateInputComponent {
  @Input() label: string = 'Select Date';
  @Input() placeholder: string = 'Date';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onDateChange(newDate: string) {
    this.valueChange.emit(newDate);
  }
}
