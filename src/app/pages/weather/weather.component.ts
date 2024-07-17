import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Properties} from "../../services/interfaces/req-response";
import {LinearChatDataset, LineChartComponent} from "../../shared/line-chart/line-chart.component";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    LineChartComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  public officeId!: string;
  private route = inject(ActivatedRoute);
  public generatedAt!: Date;
  public chartLabels!: string[];
  public chartDatasets: LinearChatDataset[] = [];

  public menuItems = [
    {
      imgUrl: 'assets/kansas.jpg',
      locationName: 'Kansas',
      weatherOfficeId: 'TOP'
    },
    {
      imgUrl: 'assets/columbia.jpg',
      locationName: 'Columbia',
      weatherOfficeId: 'LWX',
    },
  ]
  public itemSelected!: any;

  constructor(private _weatherService: WeatherService) {
    this.route.params.subscribe(params => {
      this.officeId = params['officeId'];
      this.itemSelected = this.menuItems.find(mi => mi.weatherOfficeId === this.officeId);
    });
    this._weatherService.getWeatherForecastDataByOfficeId(this.officeId).subscribe(rs => {
      if (rs) {
        rs.periods = rs.periods.filter(p => p.isDaytime);
        this.prepareChartData(rs);
      }
    })
  }


  prepareChartData(props: Properties) {
    this.chartLabels = props.periods.map(p => p.name);
    this.chartDatasets.push({
      label: 'Forecast',
      data: props.periods.map(p => (p)),
      pointRadius: 5,
    });
  }

}
