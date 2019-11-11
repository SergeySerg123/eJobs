import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Job} from "../../../../models/job.model";
import {AppState} from "../../../../store/state/app.states";
import {JobsClientService} from "../../../../services/jobs-client.service";
import {AuthServiceClient} from "../../../../services/auth-client.service";
import {jobToArrayCreator} from "../../../../_helpers/job-to-array-creator";
import * as _ from 'lodash';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  vacancies: Job[] = [];
  loading: boolean = false;
  hasCloseBtn: boolean = true;
  hasOpenBtn: boolean = true;

  constructor(
    private store: Store<AppState>,
    private jobsClient: JobsClientService,
    private authClient: AuthServiceClient
  ) {
    this.store.subscribe(state => {
      const jobsList = state.jobsList.jobsList;
      this.vacancies = [];
      this.loading = state.jobsList.loading;
      if (jobsList !== null && this.isEmployee(this.authClient.role)) {
        this.hasCloseBtn = false;
        this.hasOpenBtn = false;
        this.vacancies = state.jobsList.jobsList;
      } else if (jobsList !== null) {
        this.vacancies = jobToArrayCreator(jobsList, this.authClient.userId);
      }
      // distinct 
      this.vacancies = _.uniqBy(this.vacancies, "id");
    });
  }

  ngOnInit() {
    if (this.vacancies.length === 0) {
      this.jobsClient.GetAllJobs();
    }
  }

  private isEmployee(role: string): boolean {
    return role === 'employee';
  }
}
