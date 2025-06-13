import { Component } from '@angular/core';
import { CardComponent } from '../../../components/reusable/card/card.component';
import { DateRangePickerComponent } from '../../../components/reusable/date-range-picker/date-range-picker.component';
import { TableComponent } from '../../../components/reusable/table/table.component';

@Component({
  selector: 'app-canceled-orders',
  imports: [CardComponent, DateRangePickerComponent, TableComponent],
  templateUrl: './canceled-orders.component.html',
  styleUrl: './canceled-orders.component.css'
})

export class CanceledOrdersComponent {
  tableData = [
    {
      booking_code: 'BK-001',
      invoice_id: 'INV-1001',
      amount: '₹850.00',
      name: 'Amit Sharma',
      reason: 'Customer cancelled',
      cancelled_on: '2025-06-08',
      ordered_on: '2025-06-06'
    },
    {
      booking_code: 'BK-002',
      invoice_id: 'INV-1002',
      amount: '₹1,200.00',
      name: 'Riya Patel',
      reason: 'Duplicate order',
      cancelled_on: '2025-06-07',
      ordered_on: '2025-06-05'
    },
    {
      booking_code: 'BK-003',
      invoice_id: 'INV-1003',
      amount: '₹560.00',
      name: 'Sunil Verma',
      reason: 'Wrong address',
      cancelled_on: '2025-06-04',
      ordered_on: '2025-06-03'
    },
    {
      booking_code: 'BK-004',
      invoice_id: 'INV-1004',
      amount: '₹2,350.00',
      name: 'Priya Desai',
      reason: 'Out of stock',
      cancelled_on: '2025-06-08',
      ordered_on: '2025-06-05'
    },
    {
      booking_code: 'BK-005',
      invoice_id: 'INV-1005',
      amount: '₹1,750.50',
      name: 'Rahul Khanna',
      reason: 'Price mismatch',
      cancelled_on: '2025-06-07',
      ordered_on: '2025-06-04'
    },
    {
      booking_code: 'BK-006',
      invoice_id: 'INV-1006',
      amount: '₹980.00',
      name: 'Neha Gupta',
      reason: 'Delivery delay',
      cancelled_on: '2025-06-06',
      ordered_on: '2025-06-01'
    },
    {
      booking_code: 'BK-007',
      invoice_id: 'INV-1007',
      amount: '₹3,200.00',
      name: 'Vikram Singh',
      reason: 'Found better deal',
      cancelled_on: '2025-06-05',
      ordered_on: '2025-06-03'
    },
    {
      booking_code: 'BK-008',
      invoice_id: 'INV-1008',
      amount: '₹1,450.00',
      name: 'Anjali Reddy',
      reason: 'Payment failed',
      cancelled_on: '2025-06-04',
      ordered_on: '2025-06-02'
    },
    {
      booking_code: 'BK-009',
      invoice_id: 'INV-1009',
      amount: '₹670.00',
      name: 'Arun Kumar',
      reason: 'Wrong item selected',
      cancelled_on: '2025-06-03',
      ordered_on: '2025-06-02'
    },
    {
      booking_code: 'BK-010',
      invoice_id: 'INV-1010',
      amount: '₹2,890.00',
      name: 'Swati Iyer',
      reason: 'Customer request',
      cancelled_on: '2025-06-02',
      ordered_on: '2025-05-30'
    },
    {
      booking_code: 'BK-011',
      invoice_id: 'INV-1011',
      amount: '₹1,120.00',
      name: 'Deepak Sharma',
      reason: 'Shipping too expensive',
      cancelled_on: '2025-06-01',
      ordered_on: '2025-05-29'
    },
    {
      booking_code: 'BK-012',
      invoice_id: 'INV-1012',
      amount: '₹4,500.00',
      name: 'Kavita Joshi',
      reason: 'Order placed by mistake',
      cancelled_on: '2025-05-31',
      ordered_on: '2025-05-30'
    },
    {
      booking_code: 'BK-013',
      invoice_id: 'INV-1013',
      amount: '₹890.00',
      name: 'Manish Patel',
      reason: 'Item no longer needed',
      cancelled_on: '2025-05-30',
      ordered_on: '2025-05-28'
    }
  ];

}
