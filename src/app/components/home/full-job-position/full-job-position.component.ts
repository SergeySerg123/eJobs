import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Job } from "../../../models/job.model";
import { AppState } from "../../../store/state/app.states";
import {JobsClientService} from "../../../services/jobs-client.service";

@Component({
  selector: 'app-full-job-position',
  templateUrl: './full-job-position.component.html',
  styleUrls: ['./full-job-position.component.scss']
})
export class FullJobPositionComponent implements OnInit{

  job: Job = null;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private jobsClient: JobsClientService
  ) {  }

  ngOnInit(): void {
    this.store.subscribe(async (appState) => {
      // @ts-ignore
      let jobId = this.router.url._value[1].path;
      let jobsList = appState.jobsList.jobsList;

      if (jobsList === null) {
        await this.jobsClient.GetJobById(jobId).then(job => this.job = job);
      } else {
        this.job = jobsList.find(job => job.id === jobId);
      }
    })
  }
}
