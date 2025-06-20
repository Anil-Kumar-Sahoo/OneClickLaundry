import { Component } from '@angular/core';
import { CardComponent } from '../../../components/reusable/card/card.component';
import { ButtonComponent } from '../../../components/reusable/button/button.component';
import { DateRangePickerComponent } from '../../../components/reusable/date-range-picker/date-range-picker.component';
import { TableComponent } from '../../../components/reusable/table/table.component';


@Component({
  selector: 'app-sales',
  imports: [CardComponent, ButtonComponent, DateRangePickerComponent, TableComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  selectedStart: string = '';
  selectedEnd: string = '';

  handleDateChange(range: { startDate: string; endDate: string }): void {
    this.selectedStart = range.startDate;
    this.selectedEnd = range.endDate;
    console.log('Selected Range:', range);
  }

  tableData = [
    { date: '2025-05-01', d_c_sale: 1000, pl_kg_sale: 800, laundry_wf_sale: 500, laundry_wi_sale: 300, sp_sale: 200, si_sale: 150, upi_wallet: 400, credit_debit_card: 600, bank_transfer: 100, cash: 350, discount: 50, net_amount: 3750, gst_18: 675, total: 4425 },
    { date: '2025-05-02', d_c_sale: 1100, pl_kg_sale: 850, laundry_wf_sale: 520, laundry_wi_sale: 310, sp_sale: 210, si_sale: 160, upi_wallet: 420, credit_debit_card: 610, bank_transfer: 120, cash: 370, discount: 55, net_amount: 3905, gst_18: 703, total: 4608 },
    { date: '2025-05-03', d_c_sale: 1050, pl_kg_sale: 830, laundry_wf_sale: 510, laundry_wi_sale: 290, sp_sale: 205, si_sale: 155, upi_wallet: 410, credit_debit_card: 605, bank_transfer: 110, cash: 360, discount: 53, net_amount: 3827, gst_18: 689, total: 4516 },
    { date: '2025-05-04', d_c_sale: 1150, pl_kg_sale: 870, laundry_wf_sale: 530, laundry_wi_sale: 320, sp_sale: 215, si_sale: 165, upi_wallet: 430, credit_debit_card: 615, bank_transfer: 130, cash: 380, discount: 58, net_amount: 3977, gst_18: 716, total: 4693 },
    { date: '2025-05-05', d_c_sale: 1200, pl_kg_sale: 900, laundry_wf_sale: 540, laundry_wi_sale: 330, sp_sale: 220, si_sale: 170, upi_wallet: 440, credit_debit_card: 620, bank_transfer: 140, cash: 390, discount: 60, net_amount: 4050, gst_18: 729, total: 4779 },
    { date: '2025-05-06', d_c_sale: 1250, pl_kg_sale: 920, laundry_wf_sale: 550, laundry_wi_sale: 340, sp_sale: 225, si_sale: 175, upi_wallet: 450, credit_debit_card: 625, bank_transfer: 150, cash: 400, discount: 62, net_amount: 4117, gst_18: 741, total: 4858 },
    { date: '2025-05-07', d_c_sale: 1300, pl_kg_sale: 940, laundry_wf_sale: 560, laundry_wi_sale: 350, sp_sale: 230, si_sale: 180, upi_wallet: 460, credit_debit_card: 630, bank_transfer: 160, cash: 410, discount: 65, net_amount: 4185, gst_18: 753, total: 4938 },
    { date: '2025-05-08', d_c_sale: 1280, pl_kg_sale: 930, laundry_wf_sale: 555, laundry_wi_sale: 345, sp_sale: 228, si_sale: 178, upi_wallet: 455, credit_debit_card: 628, bank_transfer: 155, cash: 405, discount: 63, net_amount: 4150, gst_18: 747, total: 4897 },
    { date: '2025-05-09', d_c_sale: 1350, pl_kg_sale: 960, laundry_wf_sale: 570, laundry_wi_sale: 360, sp_sale: 235, si_sale: 185, upi_wallet: 470, credit_debit_card: 635, bank_transfer: 165, cash: 420, discount: 67, net_amount: 4253, gst_18: 765, total: 5018 },
    { date: '2025-05-10', d_c_sale: 1400, pl_kg_sale: 980, laundry_wf_sale: 580, laundry_wi_sale: 370, sp_sale: 240, si_sale: 190, upi_wallet: 480, credit_debit_card: 640, bank_transfer: 170, cash: 430, discount: 70, net_amount: 4310, gst_18: 776, total: 5086 },
    { date: '2025-05-11', d_c_sale: 1380, pl_kg_sale: 970, laundry_wf_sale: 575, laundry_wi_sale: 365, sp_sale: 238, si_sale: 188, upi_wallet: 475, credit_debit_card: 638, bank_transfer: 168, cash: 425, discount: 68, net_amount: 4275, gst_18: 769, total: 5044 },
    { date: '2025-05-12', d_c_sale: 1450, pl_kg_sale: 1000, laundry_wf_sale: 590, laundry_wi_sale: 380, sp_sale: 245, si_sale: 195, upi_wallet: 485, credit_debit_card: 645, bank_transfer: 175, cash: 435, discount: 72, net_amount: 4368, gst_18: 786, total: 5154 },
    { date: '2025-05-13', d_c_sale: 1500, pl_kg_sale: 1020, laundry_wf_sale: 600, laundry_wi_sale: 390, sp_sale: 250, si_sale: 200, upi_wallet: 490, credit_debit_card: 650, bank_transfer: 180, cash: 440, discount: 75, net_amount: 4425, gst_18: 796, total: 5221 },
    { date: '2025-05-14', d_c_sale: 1520, pl_kg_sale: 1030, laundry_wf_sale: 605, laundry_wi_sale: 395, sp_sale: 252, si_sale: 202, upi_wallet: 495, credit_debit_card: 652, bank_transfer: 182, cash: 445, discount: 77, net_amount: 4447, gst_18: 800, total: 5247 },
    { date: '2025-05-15', d_c_sale: 1550, pl_kg_sale: 1040, laundry_wf_sale: 610, laundry_wi_sale: 400, sp_sale: 255, si_sale: 205, upi_wallet: 500, credit_debit_card: 655, bank_transfer: 185, cash: 450, discount: 78, net_amount: 4483, gst_18: 807, total: 5290 },
    { date: '2025-05-16', d_c_sale: 1580, pl_kg_sale: 1050, laundry_wf_sale: 615, laundry_wi_sale: 405, sp_sale: 258, si_sale: 208, upi_wallet: 505, credit_debit_card: 658, bank_transfer: 188, cash: 455, discount: 80, net_amount: 4518, gst_18: 813, total: 5331 },
    { date: '2025-05-17', d_c_sale: 1600, pl_kg_sale: 1060, laundry_wf_sale: 620, laundry_wi_sale: 410, sp_sale: 260, si_sale: 210, upi_wallet: 510, credit_debit_card: 660, bank_transfer: 190, cash: 460, discount: 82, net_amount: 4540, gst_18: 817, total: 5357 },
    { date: '2025-05-18', d_c_sale: 1620, pl_kg_sale: 1070, laundry_wf_sale: 625, laundry_wi_sale: 415, sp_sale: 262, si_sale: 212, upi_wallet: 515, credit_debit_card: 662, bank_transfer: 192, cash: 465, discount: 83, net_amount: 4562, gst_18: 822, total: 5384 },
    { date: '2025-05-19', d_c_sale: 1650, pl_kg_sale: 1080, laundry_wf_sale: 630, laundry_wi_sale: 420, sp_sale: 265, si_sale: 215, upi_wallet: 520, credit_debit_card: 665, bank_transfer: 195, cash: 470, discount: 85, net_amount: 4598, gst_18: 828, total: 5426 },
    { date: '2025-05-20', d_c_sale: 1670, pl_kg_sale: 1090, laundry_wf_sale: 635, laundry_wi_sale: 425, sp_sale: 268, si_sale: 218, upi_wallet: 525, credit_debit_card: 668, bank_transfer: 198, cash: 475, discount: 87, net_amount: 4623, gst_18: 832, total: 5455 },
    { date: '2025-05-21', d_c_sale: 1700, pl_kg_sale: 1100, laundry_wf_sale: 640, laundry_wi_sale: 430, sp_sale: 270, si_sale: 220, upi_wallet: 530, credit_debit_card: 670, bank_transfer: 200, cash: 480, discount: 88, net_amount: 4648, gst_18: 837, total: 5485 },
    { date: '2025-05-22', d_c_sale: 1720, pl_kg_sale: 1110, laundry_wf_sale: 645, laundry_wi_sale: 435, sp_sale: 272, si_sale: 222, upi_wallet: 535, credit_debit_card: 672, bank_transfer: 202, cash: 485, discount: 90, net_amount: 4670, gst_18: 841, total: 5511 },
    { date: '2025-05-23', d_c_sale: 1750, pl_kg_sale: 1120, laundry_wf_sale: 650, laundry_wi_sale: 440, sp_sale: 275, si_sale: 225, upi_wallet: 540, credit_debit_card: 675, bank_transfer: 205, cash: 490, discount: 92, net_amount: 4696, gst_18: 846, total: 5552 },
    { date: '2025-05-24', d_c_sale: 1770, pl_kg_sale: 1130, laundry_wf_sale: 655, laundry_wi_sale: 445, sp_sale: 278, si_sale: 228, upi_wallet: 545, credit_debit_card: 678, bank_transfer: 208, cash: 495, discount: 94, net_amount: 4721, gst_18: 850, total: 5581 },
    { date: '2025-05-25', d_c_sale: 1800, pl_kg_sale: 1140, laundry_wf_sale: 660, laundry_wi_sale: 450, sp_sale: 280, si_sale: 230, upi_wallet: 550, credit_debit_card: 680, bank_transfer: 210, cash: 500, discount: 95, net_amount: 4746, gst_18: 855, total: 5611 },
    { date: '2025-05-26', d_c_sale: 1820, pl_kg_sale: 1150, laundry_wf_sale: 665, laundry_wi_sale: 455, sp_sale: 282, si_sale: 232, upi_wallet: 555, credit_debit_card: 682, bank_transfer: 212, cash: 505, discount: 97, net_amount: 4768, gst_18: 859, total: 5637 },
    { date: '2025-05-27', d_c_sale: 1850, pl_kg_sale: 1160, laundry_wf_sale: 670, laundry_wi_sale: 460, sp_sale: 285, si_sale: 235, upi_wallet: 560, credit_debit_card: 685, bank_transfer: 215, cash: 510, discount: 99, net_amount: 4794, gst_18: 864, total: 5678 },
    { date: '2025-05-28', d_c_sale: 1870, pl_kg_sale: 1170, laundry_wf_sale: 675, laundry_wi_sale: 465, sp_sale: 288, si_sale: 238, upi_wallet: 565, credit_debit_card: 688, bank_transfer: 218, cash: 515, discount: 100, net_amount: 4819, gst_18: 868, total: 5707 },
    { date: '2025-05-29', d_c_sale: 1900, pl_kg_sale: 1180, laundry_wf_sale: 680, laundry_wi_sale: 470, sp_sale: 290, si_sale: 240, upi_wallet: 570, credit_debit_card: 690, bank_transfer: 220, cash: 520, discount: 102, net_amount: 4844, gst_18: 873, total: 5737 },
    { date: '2025-05-30', d_c_sale: 1920, pl_kg_sale: 1190, laundry_wf_sale: 685, laundry_wi_sale: 475, sp_sale: 292, si_sale: 242, upi_wallet: 575, credit_debit_card: 692, bank_transfer: 222, cash: 525, discount: 104, net_amount: 4866, gst_18: 877, total: 5763 }
  ];

}
