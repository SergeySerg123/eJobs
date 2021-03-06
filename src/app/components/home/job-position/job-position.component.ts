import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../../models/job.model";
import {Router} from "@angular/router";
import {JobsClientService} from "../../../services/jobs-client.service";
import {AuthServiceClient} from "../../../services/auth-client.service";

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.scss']
})
export class JobPositionComponent implements OnInit {

  @Input() hasCloseBtn: boolean = false;
  @Input() hasOpenBtn: boolean = false;
  @Input() list: Job[] = null;
  @Input() loading: boolean = false;
  @Input() canCreate: boolean = false;

  constructor(
    private router: Router,
    private jobsClient: JobsClientService,
    private authClient: AuthServiceClient
  ) { }

  ngOnInit() {
    this.canCreate = this.isEmployee;
  }

  get isEmployee(): boolean {
    return this.authClient.role === 'employee';
  }

  // show info about selected Job element
  async showFullInfo(id: string) {
    if (!this.hasCloseBtn) {
      await this.router.navigateByUrl(`/jobs/${id}`);
    }
  }

  // delete Job from suggestion list and add to interviews list
  applySuggest(id: string) {
    const job: Job = this.deleteIdFromList(id);
    job.interviewUserId.push(this.authClient.userId);
    this.jobsClient.UpdateSuggestionList(job);
  }

  // Delete position from suggestion list
  deleteSuggest(id: string) {
    const job: Job = this.deleteIdFromList(id);
    this.jobsClient.UpdateSuggestionList(job);
  }

  async navigateTo() {
    await this.router.navigateByUrl('/new-vacancy');
  }

  get listNotNull(): boolean {
    return this.list.length > 0;
  }

  // cut selected jobId from suggestedList
  private deleteIdFromList(id: string): Job {
    const job: Job = this.list.find(j => j.id === id);
    if (!this.hasOpenBtn) {
      job.appliedUserId = this.removeUserId([...job.appliedUserId],
        this.authClient.userId);
    } else {
      job.suggestedToUserId = this.removeUserId([...job.suggestedToUserId],
        this.authClient.userId);
    }
    return job;
  }

  private removeUserId(array: string[], userId): string[] {
    return array.filter(id => id !== userId);
  }
}
