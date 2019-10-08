import {Routes} from "@angular/router";
import {ApplicationsComponent} from "../../components/home/vacancies/applications/applications.component";
import {SuggestionsComponent} from "../../components/home/vacancies/suggestions/suggestions.component";

export const vacancyRoutes: Routes = [
  { path: "", component: SuggestionsComponent},
  { path: "my-applications", component: ApplicationsComponent }
];
