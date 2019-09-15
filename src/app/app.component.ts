import { Component } from '@angular/core';
import { routerAnimation } from './app-routing.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  title = 'eJobs';

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
