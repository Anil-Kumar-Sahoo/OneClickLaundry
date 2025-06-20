import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/reusable/search-bar/search-bar.component';
import { ButtonComponent } from '../../components/reusable/button/button.component';
import { TableComponent } from '../../components/reusable/table/table.component';
import { ModalComponent } from '../../components/reusable/modal/modal.component';
import { CardComponent } from '../../components/reusable/card/card.component';

@Component({
  selector: 'app-customers',
  imports: [SearchBarComponent, ButtonComponent, TableComponent, ModalComponent, CardComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  searchTerm = '';
  addEmployeeModal: boolean = false;
  editModal: boolean = false;

  addEmployee(): void {
    this.addEmployeeModal = true;
  }

  closeAddModal(): void {
    this.addEmployeeModal = false;
  }

  openEditModal(rowData: any): void {
    this.editModal = true;
    console.log('Edit clicked:', rowData);
  }

  closeEditModal(): void {
    this.editModal = false;
  }

  // onDelete(row: any) {
  //   console.log('Delete clicked:', row);
  //   this.tableData = this.tableData.filter(item => item !== row);
  // }

  onStatusChange(event: { row: any; newStatus: boolean }) {
    console.log('Status changed:', event.row, 'New Status:', event.newStatus);
  }

  onSearchTermChange(term: string): void {
    this.searchTerm = term;
  }

  tableData = [
    { customer: 'John Doe', contact: '+91-9876543210', total_bookings: 12, total_value: '₹5,000', customer_since: '2022-01-15', last_order: '2025-06-06' },
    { customer: 'Priya Sharma', contact: '+91-9123456780', total_bookings: 8, total_value: '₹3,200', customer_since: '2023-03-10', last_order: '2025-05-30' },
    { customer: 'Ahmed Khan', contact: '+91-9012345678', total_bookings: 15, total_value: '₹7,800', customer_since: '2021-11-01', last_order: '2025-06-01' },
    { customer: 'Sunita Mehta', contact: '+91-9988776655', total_bookings: 5, total_value: '₹1,400', customer_since: '2024-06-20', last_order: '2025-05-28' },
    { customer: 'Ramesh Patel', contact: '+91-9112233445', total_bookings: 20, total_value: '₹10,500', customer_since: '2020-08-05', last_order: '2025-06-04' },
    { customer: 'Anjali Verma', contact: '+91-9000011122', total_bookings: 10, total_value: '₹4,000', customer_since: '2023-01-15', last_order: '2025-06-02' },
    { customer: 'Suresh Raina', contact: '+91-9090909090', total_bookings: 6, total_value: '₹2,200', customer_since: '2022-10-12', last_order: '2025-06-01' },
    { customer: 'Kavita Joshi', contact: '+91-9888877665', total_bookings: 18, total_value: '₹9,000', customer_since: '2021-12-25', last_order: '2025-05-29' },
    { customer: 'Arun Mishra', contact: '+91-9223344556', total_bookings: 7, total_value: '₹2,800', customer_since: '2023-05-01', last_order: '2025-06-05' },
    { customer: 'Nisha Kumari', contact: '+91-9356789012', total_bookings: 9, total_value: '₹3,900', customer_since: '2022-09-09', last_order: '2025-06-03' },
    { customer: 'Rahul Gupta', contact: '+91-9456123789', total_bookings: 11, total_value: '₹5,300', customer_since: '2023-04-11', last_order: '2025-06-02' },
    { customer: 'Bhavna Singh', contact: '+91-9600456123', total_bookings: 14, total_value: '₹6,200', customer_since: '2020-11-20', last_order: '2025-06-06' },
    { customer: 'Yogesh Thakur', contact: '+91-9745612300', total_bookings: 13, total_value: '₹6,000', customer_since: '2022-02-14', last_order: '2025-05-31' },
    { customer: 'Neha Saxena', contact: '+91-9011223344', total_bookings: 16, total_value: '₹7,100', customer_since: '2021-05-18', last_order: '2025-06-05' },
    { customer: 'Vikas Bansal', contact: '+91-9900887766', total_bookings: 4, total_value: '₹1,100', customer_since: '2024-01-10', last_order: '2025-05-27' },
    { customer: 'Tanya Rawat', contact: '+91-9911991199', total_bookings: 22, total_value: '₹11,200', customer_since: '2020-06-22', last_order: '2025-06-06' },
    { customer: 'Deepak Joshi', contact: '+91-9877891234', total_bookings: 19, total_value: '₹8,800', customer_since: '2022-07-01', last_order: '2025-06-03' },
    { customer: 'Meera Bhatt', contact: '+91-9785612345', total_bookings: 6, total_value: '₹2,100', customer_since: '2023-10-05', last_order: '2025-06-01' },
    { customer: 'Harish Nair', contact: '+91-9898654321', total_bookings: 12, total_value: '₹5,100', customer_since: '2021-03-17', last_order: '2025-06-04' },
    { customer: 'Pooja Desai', contact: '+91-9777766554', total_bookings: 7, total_value: '₹2,900', customer_since: '2023-12-01', last_order: '2025-05-30' },
    { customer: 'Karan Kapoor', contact: '+91-9321456789', total_bookings: 17, total_value: '₹7,400', customer_since: '2022-06-08', last_order: '2025-06-06' },
    { customer: 'Aditi Chauhan', contact: '+91-9345619876', total_bookings: 9, total_value: '₹3,600', customer_since: '2021-08-15', last_order: '2025-06-01' },
    { customer: 'Shyam Prasad', contact: '+91-9765432100', total_bookings: 13, total_value: '₹6,400', customer_since: '2020-09-27', last_order: '2025-06-02' },
    { customer: 'Ritika Jain', contact: '+91-9988774411', total_bookings: 5, total_value: '₹1,600', customer_since: '2024-05-05', last_order: '2025-06-03' },
    { customer: 'Gaurav Singh', contact: '+91-9765123098', total_bookings: 21, total_value: '₹10,100', customer_since: '2021-01-09', last_order: '2025-06-04' },
    { customer: 'Sneha Reddy', contact: '+91-9354876210', total_bookings: 10, total_value: '₹4,100', customer_since: '2022-04-02', last_order: '2025-06-05' },
    { customer: 'Ankur Malhotra', contact: '+91-9543216789', total_bookings: 14, total_value: '₹6,700', customer_since: '2023-02-20', last_order: '2025-06-06' },
    { customer: 'Ishita Sinha', contact: '+91-9612349876', total_bookings: 8, total_value: '₹3,100', customer_since: '2022-08-14', last_order: '2025-06-02' },
    { customer: 'Rajiv Narayan', contact: '+91-9998887776', total_bookings: 11, total_value: '₹5,500', customer_since: '2021-06-11', last_order: '2025-06-01' },
    { customer: 'Divya Balan', contact: '+91-9632587410', total_bookings: 9, total_value: '₹3,300', customer_since: '2023-09-09', last_order: '2025-05-29' }
  ];


}
