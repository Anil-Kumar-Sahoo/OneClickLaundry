import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  @Input() model: string = '';
  @Output() modelChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  onChange() {
    this.model = this.model.trim();
    this.modelChange.emit(this.model);
    this.search.emit(this.model);
  }

  onSearchClick() {
    this.model = this.model.trim();
    this.search.emit(this.model);
  }
}
