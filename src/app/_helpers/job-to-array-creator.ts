import {Job} from "../models/job.model";

export function jobToArrayCreator(jobsList: Job[], id: string, isSuggestions: boolean = true): Job[] {
  const toArray: Job[] = [];
  if (jobsList !== null) {
    jobsList.forEach(job => {
      try {
        if (!isSuggestions) {
          job.appliedUserId.forEach(userId => {
            if (userId === id) {
              toArray.push(job);
            }
          }); 
        } else {
          job.suggestedToUserId.forEach(userId => {
            if (userId === id) {
              toArray.push(job);
            }
          }); 
        }
      } catch {}        
    });
  }
  return toArray;
}