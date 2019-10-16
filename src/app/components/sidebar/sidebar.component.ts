import {Component} from '@angular/core';
import {faBriefcase, faCubes, faList, faUser, faUsers} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {AuthServiceClient} from "../../services/auth-client.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  faList = faList;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faCubes = faCubes;
  faUsers = faUsers;
  currentUrl: string;
  role: string;

  constructor(private router: Router,
  private authClient: AuthServiceClient,) {
    this.role = this.authClient.role;
    this.nextActiveItem();
  }

  nextActiveItem(): void {
    this.currentUrl = this.router.url.substr(1).split('/')[0];
  }
}
