import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  applicants: string = 'applicants';
  mySuggestions: string = 'my-suggestions';
  interviews: string = 'interviews';
  selectedRoute: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.findActiveUrl();
  }

  private findActiveUrl() {
    let urlArr = this.router.url.split("/");
    this.setActiveLink(urlArr.length == 2 ? urlArr[1] : urlArr[2]);
  }

  private setActiveLink(routeName: string) {
    this.selectedRoute = routeName;
  }

  async setPage($event: MouseEvent) {
    await this.router.navigateByUrl(this.navigateTo($event));
    this.findActiveUrl();
  }

  // Redirect to specific route
  private navigateTo(event) {
    const element = event.target.id;
    switch (element) {
      case this.applicants:
        return `/${this.applicants}`;

      case this.mySuggestions:
        return `${this.mySuggestions}`;

      case this.interviews:
        return `${this.interviews}`;
    }
  }
}
