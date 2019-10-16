import {Routes} from "@angular/router";
import {vacancyRoutes} from "./vacancies-child.routing";
import {FullJobPositionComponent} from "../../components/home/full-job-position/full-job-position.component";
import {JobOppeningsComponent} from "../../components/home/job-oppenings/job-oppenings.component";
import {VacanciesComponent} from "../../components/home/vacancies/vacancies.component";
import {CoursesComponent} from "../../components/home/courses/courses.component";
import {ProfileComponent} from "../../components/home/profile/profile.component";
import {ApplicationsComponent} from "../../components/home/vacancies/applications/applications.component";
import {NewVacancyComponent} from "../../components/home/new-vacancy/new-vacancy.component";
import {MySuggestionsComponent} from "../../components/home/vacancies/applications/my-suggestions/my-suggestions.component";
import {InterviewsComponent} from "../../components/home/interviews/interviews.component";

export const homeRoutes: Routes = [
  {path: "vacancies", component: VacanciesComponent, children: vacancyRoutes},
  {path: "new-vacancy", component: NewVacancyComponent},
  {path: "courses", component: CoursesComponent},
  {path: "applicants", component: ApplicationsComponent},
  {path: "my-suggestions", component: MySuggestionsComponent},
  {path: "interviews", component: InterviewsComponent},
  {path: "profile", component: ProfileComponent},
  {path: 'jobs/:id', component: FullJobPositionComponent},
  {path: '', component: JobOppeningsComponent}
];
