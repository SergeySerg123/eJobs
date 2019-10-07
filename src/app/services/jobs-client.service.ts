import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.states";
import {GetAllJobs, GetAllJobsFailure, GetAllJobsSuccess} from "../store/actions/jobs.actions";
import {JobsService} from "./jobs.service";
import {Job} from "../models/job.model";

@Injectable()
export class JobsClientService {
  constructor(
    private store: Store<AppState>,
    private jobs: JobsService
  ) { }

  GetAllJobs(){
      this.store.dispatch(new GetAllJobs());

      this.jobs.getJobsList().subscribe((jobsList) => {
        this.store.dispatch(new GetAllJobsSuccess(jobsList));
      }, error => {
        this.store.dispatch(new GetAllJobsFailure(error));
      });
  }

  GetJobById(id: string) : Promise<Job> {
    return this.jobs.getJobById(id).toPromise();
  }
}
