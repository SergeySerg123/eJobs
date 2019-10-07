import { Component, OnInit } from '@angular/core';
import {JobsClientService} from "../../../services/jobs-client.service";
import {Job} from "../../../models/job.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.states";

@Component({
  selector: 'app-job-oppenings',
  templateUrl: './job-oppenings.component.html',
  styleUrls: ['./job-oppenings.component.scss']
})
export class JobOppeningsComponent implements OnInit {
  jobsList: Job[] = null;
  loading: boolean = false;

  constructor(
    private jobsClient: JobsClientService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.jobsClient.GetAllJobs();
    this.store.subscribe(appState => {
      this.jobsList = appState.jobsList.jobsList;
      this.loading = appState.jobsList.loading;
    });
  }
}
