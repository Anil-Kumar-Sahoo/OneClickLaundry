import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/reusable/card/card.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class InformationComponent {
  isBankEditable = false;
  isTimingEditable = false;

  store = {
    code: 'UC407',
    mobile: '7717966844',
    name: 'UClean Bhatagaon Raipur',
    franchise: 'AS VENTURE',
    address: 'GF Shop No.1, Rashmi Tower, Wall Fort City Road, Bhatagaon, Raipur - 492013',
    latitude: 21.2189767,
    longitude: 81.6126601,
    gstin: '22ACCFA6152H1ZT',
  };

  bank = {
    name: 'ICICI BANK',
    accountNumber: '472305500068',
    ifsc: 'ICIC0004723',
    upi: '',
  };

  timings: { day: string; time: string }[] = [
    { day: 'Sunday', time: 'Closed' },
    { day: 'Monday', time: '10:00 AM - 8:00 PM' },
    { day: 'Tuesday', time: '10:00 AM - 8:00 PM' },
    { day: 'Wednesday', time: '10:00 AM - 8:00 PM' },
    { day: 'Thursday', time: '10:00 AM - 8:00 PM' },
    { day: 'Friday', time: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 8:00 PM' },
  ];
}
