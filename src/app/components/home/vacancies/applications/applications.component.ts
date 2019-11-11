import { Component, OnInit } from '@angular/core';
import {Job} from "../../../../models/job.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store/state/app.states";
import {JobsClientService} from "../../../../services/jobs-client.service";
import {AuthServiceClient} from "../../../../services/auth-client.service";
import {jobToArrayCreator} from "../../../../_helpers/job-to-array-creator";
import * as _ from 'lodash';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  vacancies: Job[] = [];
  loading: boolean = false;

  constructor(
    private store: Store<AppState>,
    private jobsClient: JobsClientService,
    private authClient: AuthServiceClient
  ) {
    this.store.subscribe(state => {
      const id = this.authClient.role === 'employee' ? this.authClient.companyId : this.authClient.userId;
      let jobsList = state.jobsList.jobsList;
      this.loading = state.jobsList.loading;
      if (jobsList !== undefined) {
        const isSuggestions = false;
        this.vacancies = jobToArrayCreator(jobsList, id, isSuggestions);
      }   
      this.vacancies = _.uniqBy(this.vacancies, "id");
    });
  }

  ngOnInit() {
    if (this.vacancies.length === 0) {
      this.jobsClient.GetAllJobs();
    }
  }
}
