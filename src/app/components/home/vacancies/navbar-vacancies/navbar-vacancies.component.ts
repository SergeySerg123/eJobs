import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-vacancies',
  templateUrl: './navbar-vacancies.component.html',
  styleUrls: ['./navbar-vacancies.component.scss']
})
export class NavbarVacanciesComponent implements OnInit {
  vacancies: string = "vacancies";
  myApplications: string = "my-applications";
  interviews: string = "interviews";
  selectedRoute: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.findActiveUrl();
  }

  // redirect function
  async setPage(event) {
    await this.router.navigateByUrl(this.navigateTo(event));
    this.findActiveUrl();
  }

  // search current url
  private findActiveUrl() {
    let urlArr = this.router.url.split("/");
    this.setActiveLink(urlArr.length == 2 ? urlArr[1] : urlArr[2]);
  }

  private setActiveLink(routeName: string) {
    this.selectedRoute = routeName;
  }

  // Redirect to specific route
  private navigateTo(event) {
    const prefix = "vacancies/";
    const element = event.target.id;
    switch (element) {
      case this.vacancies:
        return `/${this.vacancies}`;

      case this.myApplications:
        return `${prefix + this.myApplications}`;

      case this.interviews:
        return `${prefix + this.interviews}`;
    }
  }
}
