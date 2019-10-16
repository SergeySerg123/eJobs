import {Component, OnInit} from '@angular/core';
import {JobsClientService} from "../../../services/jobs-client.service";
import {Job} from "../../../models/job.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.states";
import {AuthServiceClient} from "../../../services/auth-client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-job-oppenings',
  templateUrl: './job-oppenings.component.html',
  styleUrls: ['./job-oppenings.component.scss']
})
export class JobOppeningsComponent implements OnInit {
  jobsList: Job[] = null;
  loading: boolean = false;
  showHeader: boolean = false;
  activatedRoute: string;

  constructor(
    private jobsClient: JobsClientService,
    private authClient: AuthServiceClient,
    private store: Store<AppState>,
    private router: ActivatedRoute
  ) {
    this.showHeader = this.authClient.role !== 'employee';
  }

  ngOnInit() {
    this.jobsClient.GetAllJobs();
    this.store.subscribe(appState => {
      // @ts-ignore
      this.activatedRoute = this.router.url._value[0].path;
      this.jobsList = appState.jobsList.jobsList;
      if (this.activatedRoute === 'my-vacancies' && this.jobsList !== null) {
        this.jobsList = this.jobsList.filter(job => job.companyId === this.authClient.userId);
      }
      this.loading = appState.jobsList.loading;
    });
  }
}
