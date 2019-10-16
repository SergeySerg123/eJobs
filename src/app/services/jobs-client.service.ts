import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.states";
import {
  DeleteSuggestedJob,
  DeleteSuggestedJobFailure,
  DeleteSuggestedJobSucceed,
  GetAllJobs,
  GetAllJobsFailure,
  GetAllJobsSuccess,
  CreateNewJob,
  CreateNewJobSucceed,
  CreateNewJobFailure
} from "../store/actions/jobs.actions";
import {JobsService} from "./jobs.service";
import {Job} from "../models/job.model";
import { AuthServiceClient } from './auth-client.service';
import { Router } from '@angular/router';

@Injectable()
export class JobsClientService {
  constructor(
    private store: Store<AppState>,
    private jobs: JobsService,
    private authClient: AuthServiceClient,
    private router: Router
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

  CreateJob(payload: any) {   
    this.store.dispatch(new CreateNewJob());
    const newJob: Job = this.createJobModel(payload);
    this.jobs.createJob(newJob).subscribe(job => {
      this.store.dispatch(new CreateNewJobSucceed());
      this.router.navigateByUrl('/vacancies/my-vacancies');
      console.log(job);
    }, err => { this.store.dispatch(new CreateNewJobFailure()) });
  }

  UpdateSuggestionList(job: Job) {
    this.store.dispatch(new DeleteSuggestedJob());
    this.jobs.updateSuggestionList(job)
      .subscribe((updatedJob) => {
      this.store.dispatch(new DeleteSuggestedJobSucceed(updatedJob));
    }, error => {
      this.store.dispatch(new DeleteSuggestedJobFailure(error));
    });
  }

  // Factory method
  private createJobModel(payload: any): Job {
    let { position, city, country, salary, stack, description, type} = payload;
    const companyId = this.authClient.companyId;
    stack = stack.split(',');
    return new Job(position, city, country, salary, stack, type, description, companyId);
  }
}
