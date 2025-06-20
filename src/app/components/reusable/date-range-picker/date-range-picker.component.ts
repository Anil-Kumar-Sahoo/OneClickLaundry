import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent {
  @Input() startDate: string = '';
  @Input() endDate: string = '';
  @Output() dateRangeChange = new EventEmitter<{ startDate: string; endDate: string }>();

  onStartDateChange(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.startDate = value;
    this.emitChange();
  }

  onEndDateChange(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.endDate = value;
    this.emitChange();
  }



  private emitChange(): void {
    this.dateRangeChange.emit({ startDate: this.startDate, endDate: this.endDate });
  }
}
