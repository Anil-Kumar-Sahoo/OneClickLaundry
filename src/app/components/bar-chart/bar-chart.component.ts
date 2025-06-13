import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  computed,
  signal
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { PLATFORM_ID } from '@angular/core';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  private readonly platformId = inject(PLATFORM_ID);

  readonly weeklyData = signal<number[]>([2500, 3000, 2000, 3200, 4000, 4500, 3800]);

  readonly totalIncome = computed(() =>
    this.weeklyData().reduce((sum, value) => sum + value, 0)
  );

  readonly maxIncome = computed(() =>
    Math.max(...this.weeklyData())
  );

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const barChartConfig: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Income (₹)',
          data: this.weeklyData(),
          backgroundColor: '#20B0B1',
          borderRadius: 6,
          barThickness: 30
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#000',
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: context => `₹${context.raw}`
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#000'
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#000'
            }
          }
        }
      }
    };

    this.chart = new Chart(this.barCanvas.nativeElement, barChartConfig);
  }
}
