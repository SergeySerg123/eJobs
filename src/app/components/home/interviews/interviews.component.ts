import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.states';
import { AuthServiceClient } from 'src/app/services/auth-client.service';
import { Job } from 'src/app/models/job.model';
import { jobToArrayCreator } from 'src/app/_helpers/job-to-array-creator';
import { JobsClientService } from 'src/app/services/jobs-client.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

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
      if ( jobsList !== null ) {
        jobsList.forEach(job => {
          try {
            job.interviewUserId.forEach(userId => {
              if (id === userId) {
                this.vacancies.push(job);
              }
            })
          } catch {}         
        })
      }
    });
  }

  ngOnInit() {
    if (this.vacancies.length === 0) {
      this.jobsClient.GetAllJobs();
    }
  }
}
