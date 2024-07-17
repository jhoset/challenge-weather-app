import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Chart, ChartType} from "chart.js/auto";
import {WeatherService} from "./services/weather.service";
import {Properties} from "./services/interfaces/req-response";
import {LinearChatDataset, LineChartComponent} from "./shared/line-chart/line-chart.component";
import {TopNavComponent} from "./shared/top-nav/top-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent, TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
