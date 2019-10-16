import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceClient} from "../../../../services/auth-client.service";

@Component({
  selector: 'app-navbar-vacancies',
  templateUrl: './navbar-vacancies.component.html',
  styleUrls: ['./navbar-vacancies.component.scss']
})
export class NavbarVacanciesComponent implements OnInit {
  vacancies: string = "vacancies";
  myApplications: string = "my-applications";
  interviews: string = "interviews";
  myVacancies: string = "my-vacancies";
  role: string;
  selectedRoute: string;

  constructor(
    private router: Router,
    private authClient: AuthServiceClient
  ) {
    this.role = this.authClient.role;
  }

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

      case this.myVacancies:
        return `${prefix + this.myVacancies}`;
    }
  }
}
