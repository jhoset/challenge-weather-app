import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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

}
