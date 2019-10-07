import {Action} from "@ngrx/store";

export enum JobsActionsTypes {
  GET_ALL_JOBS = "[Jobs] GET_ALL_JOBS",
  GET_ALL_JOBS_SUCCESS = "[Jobs] GET_ALL_JOBS_SUCCESS",
  GET_ALL_JOBS_FAILURE = "[Jobs] GET_ALL_JOBS_FAILURE"
}

export class GetAllJobs implements Action {
  readonly type = JobsActionsTypes.GET_ALL_JOBS;
  constructor() { }
}

export class GetAllJobsSuccess implements Action {
  readonly type = JobsActionsTypes.GET_ALL_JOBS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetAllJobsFailure implements Action {
  readonly type = JobsActionsTypes.GET_ALL_JOBS_FAILURE;
  constructor(public payload: any) { }
}

export type JobsTypes = GetAllJobs | GetAllJobsSuccess | GetAllJobsFailure;
