import {Routes} from "@angular/router";
import {FullJobPositionComponent} from "../../components/home/full-job-position/full-job-position.component";
import {JobOppeningsComponent} from "../../components/home/job-oppenings/job-oppenings.component";
import {vacancyRoutes} from "./vacancies-child.routing";
import {VacanciesComponent} from "../../components/home/vacancies/vacancies.component";
import {CoursesComponent} from "../../components/home/courses/courses.component";
import {ProfileComponent} from "../../components/home/profile/profile.component";

export const homeRoutes: Routes = [
  {path: "vacancies", component: VacanciesComponent, children: vacancyRoutes},
  {path: "courses", component: CoursesComponent},
  {path: "profile", component: ProfileComponent},
  { path: 'jobs/:id', component: FullJobPositionComponent },
  { path: '', component: JobOppeningsComponent }
];
