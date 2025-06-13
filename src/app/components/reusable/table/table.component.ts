import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent<T extends Record<string, any>> {
  @Input() columns: string[] = [];
  @Input() columnLabels: Record<string, string> = {};
  @Input() columnWidths: Record<string, string> = {};
  @Input() data: T[] = [];
  @Input() searchTerm: string = '';
  @Input() pageSize: number = 10;

  @Input() showActions: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() showDelete: boolean = false;

  @Input() showStatus: boolean = false;
  @Input() statusField: string = 'status';

  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() statusChange = new EventEmitter<{ row: T; newStatus: boolean }>();

  currentPage = 1;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get filteredData(): T[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(term)
      )
    );
  }

  get sortedData(): T[] {
    if (!this.sortColumn) return this.filteredData;
    return [...this.filteredData].sort((a, b) => {
      const valA = a[this.sortColumn];
      const valB = b[this.sortColumn];
      const compare = valA > valB ? 1 : valA < valB ? -1 : 0;
      return this.sortDirection === 'asc' ? compare : -compare;
    });
  }

  get paginatedData(): T[] {
    if (this.pageSize === 0) return this.sortedData;
    const start = (this.currentPage - 1) * this.pageSize;
    return this.sortedData.slice(start, start + this.pageSize);
  }

  changePage(delta: number): void {
    const maxPage = this.totalPages;
    const nextPage = this.currentPage + delta;
    if (nextPage >= 1 && nextPage <= maxPage) {
      this.currentPage = nextPage;
    }
  }

  get totalPages(): number {
    if (this.pageSize === 0) return 1;
    return Math.ceil(this.sortedData.length / this.pageSize);
  }

  sortByColumn(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  toggleStatus(row: any): void {
    const newStatus = !row[this.statusField];
    row[this.statusField] = newStatus;
    this.statusChange.emit({ row, newStatus });
  }
}
