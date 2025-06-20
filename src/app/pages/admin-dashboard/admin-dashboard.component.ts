import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from "../../components/doughnut-chart/doughnut-chart.component";
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";
import { NewOrderTableComponent } from "../../components/new-order-table/new-order-table.component";
import { InProcessTableComponent } from "../../components/in-process-table/in-process-table.component";
import { CardComponent } from '../../components/reusable/card/card.component';
import { TabSwitcherComponent } from '../../components/reusable/tab-switcher/tab-switcher.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, DoughnutChartComponent, BarChartComponent, CardComponent, TabSwitcherComponent, NewOrderTableComponent, InProcessTableComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

}
