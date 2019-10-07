import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faBriefcase, faCubes, faList, faUser} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

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
  currentUrl: string;

  constructor(private router: Router) {
    this.nextActiveItem();
  }

  nextActiveItem(): void {
    this.currentUrl = this.router.url.substr(1).split('/')[0];
  }
}
