import {Component} from '@angular/core';
import {  Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profilePath = '/profile';
  hideSearch = false;

  constructor ( private router: Router ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === this.profilePath) {
          this.hideSearch = true;
        } else {
          this.hideSearch = false;
        }
      }
    });
  }
}
