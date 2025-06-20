import { Component } from '@angular/core';
import { TableComponent } from '../../../components/reusable/table/table.component';
import { CardComponent } from '../../../components/reusable/card/card.component';

@Component({
  selector: 'app-drop-customers',
  imports: [TableComponent, CardComponent],
  templateUrl: './drop-customers.component.html',
  styleUrl: './drop-customers.component.css'
})
export class DropCustomersComponent {
  tableData = [
    {
      name: 'Ravi Kumar',
      mobile: '+91-9876543210',
      average_amount: '₹2,340.50',
      first_order: '2023-01-15',
      last_order: '2025-06-08'
    },
    {
      name: 'Priya Sharma',
      mobile: '+91-8765432109',
      average_amount: '₹3,150.75',
      first_order: '2022-11-22',
      last_order: '2025-06-07'
    },
    {
      name: 'Amit Patel',
      mobile: '+91-7654321098',
      average_amount: '₹1,845.20',
      first_order: '2023-03-10',
      last_order: '2025-06-05'
    },
    {
      name: 'Neha Gupta',
      mobile: '+91-6543210987',
      average_amount: '₹4,230.00',
      first_order: '2021-08-14',
      last_order: '2025-06-04'
    },
    {
      name: 'Sanjay Singh',
      mobile: '+91-9432109876',
      average_amount: '₹2,780.30',
      first_order: '2022-05-30',
      last_order: '2025-06-03'
    },
    {
      name: 'Anjali Mehta',
      mobile: '+91-8321098765',
      average_amount: '₹3,560.90',
      first_order: '2023-02-18',
      last_order: '2025-06-02'
    },
    {
      name: 'Vikram Joshi',
      mobile: '+91-7210987654',
      average_amount: '₹5,120.25',
      first_order: '2020-12-05',
      last_order: '2025-06-01'
    },
    {
      name: 'Sunita Reddy',
      mobile: '+91-6109876543',
      average_amount: '₹1,980.60',
      first_order: '2023-04-22',
      last_order: '2025-05-30'
    },
    {
      name: 'Rajesh Khanna',
      mobile: '+91-5098765432',
      average_amount: '₹2,670.40',
      first_order: '2022-09-11',
      last_order: '2025-05-28'
    },
    {
      name: 'Pooja Verma',
      mobile: '+91-4987654321',
      average_amount: '₹3,890.15',
      first_order: '2021-07-19',
      last_order: '2025-05-27'
    },
    {
      name: 'Alok Mishra',
      mobile: '+91-3876543210',
      average_amount: '₹2,450.80',
      first_order: '2023-01-08',
      last_order: '2025-05-25'
    },
    {
      name: 'Kavita Nair',
      mobile: '+91-2765432109',
      average_amount: '₹4,560.70',
      first_order: '2020-10-31',
      last_order: '2025-05-24'
    },
    {
      name: 'Manish Tiwari',
      mobile: '+91-1654321098',
      average_amount: '₹3,210.35',
      first_order: '2022-06-15',
      last_order: '2025-05-22'
    },
    {
      name: 'Swati Choudhary',
      mobile: '+91-9543210987',
      average_amount: '₹2,890.45',
      first_order: '2023-05-01',
      last_order: '2025-05-20'
    },
    {
      name: 'Arun Malik',
      mobile: '+91-8432109876',
      average_amount: '₹1,750.90',
      first_order: '2023-07-12',
      last_order: '2025-05-18'
    },
    {
      name: 'Meena Desai',
      mobile: '+91-7321098765',
      average_amount: '₹3,420.60',
      first_order: '2021-04-25',
      last_order: '2025-05-16'
    },
    {
      name: 'Vishal Rana',
      mobile: '+91-6210987654',
      average_amount: '₹4,780.20',
      first_order: '2020-09-08',
      last_order: '2025-05-15'
    },
    {
      name: 'Divya Iyer',
      mobile: '+91-5109876543',
      average_amount: '₹2,560.30',
      first_order: '2022-12-03',
      last_order: '2025-05-13'
    },
    {
      name: 'Rahul Bose',
      mobile: '+91-4098765432',
      average_amount: '₹3,670.85',
      first_order: '2021-11-17',
      last_order: '2025-05-11'
    },
    {
      name: 'Shilpa Shetty',
      mobile: '+91-3987654321',
      average_amount: '₹2,930.40',
      first_order: '2023-02-28',
      last_order: '2025-05-09'
    },
    {
      name: 'Naveen Chopra',
      mobile: '+91-2876543210',
      average_amount: '₹4,120.75',
      first_order: '2020-07-14',
      last_order: '2025-05-07'
    }
  ];

}
