import {Job} from "../models/job.model";

export function jobToArrayCreator(jobsList: Job[], id: string): Job[] {
  const toArray: Job[] = [];
  if (jobsList !== null) {
    jobsList.forEach(job => {
      job.appliedUserId.forEach(userId => {
        if (userId === id) {
          toArray.push(job);
        }
      })
    });
  }
  return toArray;
}
