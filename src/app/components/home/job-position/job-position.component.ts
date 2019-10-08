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
  @Input() list: Job[] = null;
  @Input() loading: boolean = false;

  constructor(
    private router: Router,
    private jobsClient: JobsClientService,
    private authClient: AuthServiceClient
  ) { }

  ngOnInit() {
  }

  async showFullInfo(id: string) {
    if (!this.hasCloseBtn) {
      await this.router.navigateByUrl(`/jobs/${id}`);
    }
  }

  // Didn't realise method
  applySuggest(id: string) {

  }

  // Update suggestions list
  deleteSuggest(id: string) {
    const job: Job = this.list.find(j => j.id === id);
    let newSuggestedIdArr: string [];
    newSuggestedIdArr = this.removeUserId([...job.suggestedToUserId],
      this.authClient.userId);
    job.suggestedToUserId = newSuggestedIdArr;
    this.jobsClient.UpdateSuggestionList(job);
  }

  private removeUserId(array: string[], userId): string[] {
    return array.filter(id => id !== userId);
  }
}
