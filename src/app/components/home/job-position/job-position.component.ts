import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../../models/job.model";
import {Router} from "@angular/router";
import {JobsClientService} from "../../../services/jobs-client.service";

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.scss']
})
export class JobPositionComponent implements OnInit {

  @Input() hasCloseBtn: boolean = false;
  @Input() list: Job[] = null;
  @Input() loading: boolean = false;

  constructor(
    private router: Router,
    private jobsClient: JobsClientService
  ) { }

  ngOnInit() {
  }

  async showFullInfo(id: string) {
    await this.router.navigateByUrl(`/jobs/${id}`);
  }

  // Didn't realise method
  applySuggest(id: string) {

  }

  // Didn't realise method
  deleteSuggest(id: string) {

    this.jobsClient
  }
}
