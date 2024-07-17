import {Component, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Chart, ChartOptions} from "chart.js/auto";

export interface LinearChatDataset {
  label: string;
  data: any[];
  borderColor?: string;
  backgroundColor?: string;
  pointRadius: number;

}

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit, OnChanges {
  public labels = input.required<string[]>();
  public datasets = input.required<LinearChatDataset[]>();
  public chatOptions = input<ChartOptions>({aspectRatio: 2.5});

  public chart: any;

  ngOnInit(): void {
    this.createChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.updateChart();
    }
  }

  private updateChart() {
    this.chart.data.datasets = this.datasets();
    this.chart.data.labels = this.labels();
    this.chart.update();
  }

  private createChart() {
    const image = new Image(25,25);
    image.src = 'assets/weather.png'
    this.chart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: this.labels(),
        datasets: this.datasets(),
      },
      options: {
        borderColor: '#194f80',

        backgroundColor: '#F11653',
        parsing: {
          yAxisKey: 'temperature',
          xAxisKey: 'name',
        },
        ...this.chatOptions(),
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => {
                return value + ' °F';
              }
            }
          }
        },
        plugins: {
          tooltip: {
            usePointStyle: true,
            callbacks: {

              title: (ctx) => {
                return `Forecast - ${ctx[0].label}`;
              },
              labelPointStyle: (ctx) => {
                return {
                  pointStyle: image,
                  rotation: 0,
                }
              },
              label: (ctx: any) => {
                const dataIndex = ctx.dataIndex;
                const period: any = ctx.dataset.data[dataIndex];
                return [
                  `  -  Temperature: ${period['temperature']} °F`,
                  `  -  Wind Direction: ${period['windDirection']}`,
                  `  -  Wind Speed: ${period['windSpeed']}`,
                  '',
                  `${period['shortForecast']}`,
                ]
              }
            }
          }
        }
      }
    });
  }


}
