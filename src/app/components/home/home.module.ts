import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from "../UI/ui.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";

import { JobPositionComponent } from './job-position/job-position.component';
import {HomeComponent} from "./home.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import { VacanciesComponent } from './vacancies/vacancies.component';
import { JobOppeningsComponent } from './job-oppenings/job-oppenings.component';
import { FullJobPositionComponent } from './full-job-position/full-job-position.component';
import {JobsClientService} from "../../services/jobs-client.service";
import {JobsService} from "../../services/jobs.service";

@NgModule({
  declarations: [
    JobPositionComponent,
    HomeComponent,
    SidebarComponent,
    VacanciesComponent,
    JobOppeningsComponent,
    FullJobPositionComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [JobsClientService, JobsService]
})
export class HomeModule { }
