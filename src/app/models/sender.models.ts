import {Job} from "./job.model";

export class UpdateSuggestionListModel {
  job: Job;
  applyJobToList: boolean;

  constructor(job: Job, applyJobToList: boolean) {
    this.job = job;
    this.applyJobToList = applyJobToList;
  }
}
