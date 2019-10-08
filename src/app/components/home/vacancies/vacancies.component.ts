import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.states";
import {Job} from "../../../models/job.model";
import {JobsClientService} from "../../../services/jobs-client.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {
  vacancies: Job[] = [];
  loading: boolean = false;
  testUserId = "1";

  constructor(
    private store: Store<AppState>,
    private jobsClient: JobsClientService
  ) {
    this.store.subscribe(state => {
      let jobsList = state.jobsList.jobsList;
      this.vacancies = [];
      this.loading = state.jobsList.loading;
      if (jobsList !== null) {
        jobsList.forEach(job => {
          job.suggestedToUserId.forEach(userId => {
            if (userId === this.testUserId) {
              this.vacancies.push(job);
            }
          })
        });
      }
    });
  }

  ngOnInit() {
    if (this.vacancies.length === 0) {
      this.jobsClient.GetAllJobs();
    }
  }
}
