import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent {

}
