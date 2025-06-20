import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { PLATFORM_ID } from '@angular/core';
import { DateInputComponent } from '../reusable/date-input/date-input.component';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CommonModule, DateInputComponent],
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: [
          'Dry Cleaning',
          'Steam Iron',
          'Wash and Iron',
          'Wash & Fold',
          'Premium Laundry'
        ],
        datasets: [{
          data: [120, 90, 150, 80, 60],
          backgroundColor: [
            '#20B0B1',
            '#558787',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ],
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#000',
              font: {
                size: 12
              }
            }
          }
        }
      }
    };

    this.chart = new Chart(this.doughnutCanvas.nativeElement, config);
  }
}
