import { Component } from '@angular/core';
import { TableComponent } from "../reusable/table/table.component";

@Component({
  selector: 'app-new-order-table',
  imports: [TableComponent],
  templateUrl: './new-order-table.component.html',
  styleUrl: './new-order-table.component.css'
})
export class NewOrderTableComponent {

  onDelete(row: any) {
    console.log('Delete clicked:', row);
    this.orderList = this.orderList.filter(item => item !== row);
  }

  orderList = [
    {
      orderId: '1024',
      pickupDate: '2025-06-04',
      pickupTime: '10:00 AM',
      customerName: 'John Doe',
      address: '123 Main Street',
      instructions: 'Leave at the doorstep'
    },
    {
      orderId: '1025',
      pickupDate: '2025-06-05',
      pickupTime: '11:30 AM',
      customerName: 'Jane Smith',
      address: '456 Elm Avenue',
      instructions: 'Ring the bell'
    },
    {
      orderId: '1026',
      pickupDate: '2025-06-06',
      pickupTime: '09:15 AM',
      customerName: 'Michael Brown',
      address: '789 Oak Street',
      instructions: 'Call upon arrival'
    },
    {
      orderId: '1027',
      pickupDate: '2025-06-07',
      pickupTime: '02:45 PM',
      customerName: 'Linda Green',
      address: '321 Pine Lane',
      instructions: 'Leave with neighbor'
    },
    {
      orderId: '1028',
      pickupDate: '2025-06-08',
      pickupTime: '01:00 PM',
      customerName: 'David Lee',
      address: '654 Maple Drive',
      instructions: 'Beware of dog'
    },
    {
      orderId: '1029',
      pickupDate: '2025-06-09',
      pickupTime: '12:30 PM',
      customerName: 'Susan White',
      address: '987 Birch Road',
      instructions: 'Leave package at back door'
    },
    {
      orderId: '1030',
      pickupDate: '2025-06-10',
      pickupTime: '03:00 PM',
      customerName: 'James Wilson',
      address: '159 Cedar Avenue',
      instructions: 'Do not ring doorbell'
    },
    {
      orderId: '1031',
      pickupDate: '2025-06-11',
      pickupTime: '04:15 PM',
      customerName: 'Patricia Taylor',
      address: '753 Spruce Street',
      instructions: 'Leave with receptionist'
    },
    {
      orderId: '1032',
      pickupDate: '2025-06-12',
      pickupTime: '10:30 AM',
      customerName: 'Robert Johnson',
      address: '852 Willow Way',
      instructions: 'Call 10 mins before arrival'
    },
    {
      orderId: '1033',
      pickupDate: '2025-06-12',
      pickupTime: '10:30 AM',
      customerName: 'Roman Range',
      address: 'America',
      instructions: 'Message 10 mins after arrival'
    }
  ];

}
