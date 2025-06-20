import { Component } from '@angular/core';
import { CardComponent } from '../../../components/reusable/card/card.component';
import { TableComponent } from '../../../components/reusable/table/table.component';

@Component({
  selector: 'app-month-wise-catagories',
  imports: [CardComponent, TableComponent],
  templateUrl: './month-wise-catagories.component.html',
  styleUrl: './month-wise-catagories.component.css'
})
export class MonthWiseCatagoriesComponent {
  tableData = [
    {
      month: 'January',
      wash_fold: 120,
      wash_iron: 95,
      steam_pressing: 60,
      standard_iron: 40,
      premium_laundry: 35,
      dry_cleaning: 25
    },
    {
      month: 'February',
      wash_fold: 150,
      wash_iron: 110,
      steam_pressing: 70,
      standard_iron: 55,
      premium_laundry: 40,
      dry_cleaning: 30
    },
    {
      month: 'March',
      wash_fold: 160,
      wash_iron: 120,
      steam_pressing: 80,
      standard_iron: 50,
      premium_laundry: 45,
      dry_cleaning: 35
    },
    {
      month: 'April',
      wash_fold: 170,
      wash_iron: 130,
      steam_pressing: 85,
      standard_iron: 60,
      premium_laundry: 48,
      dry_cleaning: 38
    },
    {
      month: 'May',
      wash_fold: 165,
      wash_iron: 125,
      steam_pressing: 78,
      standard_iron: 58,
      premium_laundry: 46,
      dry_cleaning: 36
    },
    {
      month: 'June',
      wash_fold: 155,
      wash_iron: 115,
      steam_pressing: 75,
      standard_iron: 52,
      premium_laundry: 44,
      dry_cleaning: 34
    },
    {
      month: 'July',
      wash_fold: 180,
      wash_iron: 140,
      steam_pressing: 90,
      standard_iron: 65,
      premium_laundry: 50,
      dry_cleaning: 42
    },
    {
      month: 'August',
      wash_fold: 175,
      wash_iron: 135,
      steam_pressing: 88,
      standard_iron: 63,
      premium_laundry: 49,
      dry_cleaning: 40
    },
    {
      month: 'September',
      wash_fold: 160,
      wash_iron: 125,
      steam_pressing: 80,
      standard_iron: 55,
      premium_laundry: 47,
      dry_cleaning: 33
    },
    {
      month: 'October',
      wash_fold: 170,
      wash_iron: 130,
      steam_pressing: 85,
      standard_iron: 60,
      premium_laundry: 48,
      dry_cleaning: 35
    },
    {
      month: 'November',
      wash_fold: 190,
      wash_iron: 150,
      steam_pressing: 95,
      standard_iron: 68,
      premium_laundry: 53,
      dry_cleaning: 45
    },
    {
      month: 'December',
      wash_fold: 200,
      wash_iron: 160,
      steam_pressing: 100,
      standard_iron: 70,
      premium_laundry: 55,
      dry_cleaning: 50
    }
  ];


}
