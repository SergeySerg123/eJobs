import {Routes} from "@angular/router";
import {ApplicationsComponent} from "../../components/home/vacancies/applications/applications.component";
import {SuggestionsComponent} from "../../components/home/vacancies/suggestions/suggestions.component";
import {JobOppeningsComponent} from "../../components/home/job-oppenings/job-oppenings.component";

export const vacancyRoutes: Routes = [
  { path: "", component: SuggestionsComponent},
  { path: "my-vacancies", component: JobOppeningsComponent},
  { path: "my-applications", component: ApplicationsComponent },
];
