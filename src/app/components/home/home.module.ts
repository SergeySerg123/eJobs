import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from "../UI/ui.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { JobPositionComponent } from './job-position/job-position.component';
import {HomeComponent} from "./home.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import { VacanciesComponent } from './vacancies/vacancies.component';
import { JobOppeningsComponent } from './job-oppenings/job-oppenings.component';
import { FullJobPositionComponent } from './full-job-position/full-job-position.component';
import {JobsClientService} from "../../services/jobs-client.service";
import {JobsService} from "../../services/jobs.service";
import { ApplicationsComponent } from './vacancies/applications/applications.component';
import { NavbarVacanciesComponent } from './vacancies/navbar-vacancies/navbar-vacancies.component';
import { SuggestionsComponent } from './vacancies/suggestions/suggestions.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import {CoursesClientService} from "../../services/courses-client.service";
import {CoursesService} from "../../services/courses.service";
import {ProfileComponent} from "./profile/profile.component";
import { NewVacancyComponent } from './new-vacancy/new-vacancy.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { NavbarComponent } from './vacancies/applications/navbar/navbar.component';
import { MySuggestionsComponent } from './vacancies/applications/my-suggestions/my-suggestions.component';
import { InterviewsComponent } from './interviews/interviews.component';

@NgModule({
  declarations: [
    JobPositionComponent,
    HomeComponent,
    SidebarComponent,
    VacanciesComponent,
    JobOppeningsComponent,
    FullJobPositionComponent,
    ApplicationsComponent,
    NavbarVacanciesComponent,
    SuggestionsComponent,
    CoursesComponent,
    CourseComponent,
    ProfileComponent,
    NewVacancyComponent,
    ApplicantsListComponent,
    NavbarComponent,
    MySuggestionsComponent,
    InterviewsComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    JobsClientService,
    JobsService,
    CoursesClientService,
    CoursesService
  ]
})
export class HomeModule { }
