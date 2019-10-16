import {Action} from "@ngrx/store";

export enum JobsActionsTypes {
  GET_ALL_JOBS = "[Jobs] GET_ALL_JOBS",
  GET_ALL_JOBS_SUCCESS = "[Jobs] GET_ALL_JOBS_SUCCESS",
  GET_ALL_JOBS_FAILURE = "[Jobs] GET_ALL_JOBS_FAILURE",
  UPDATE_JOB = "[Jobs] UPDATE_JOB",
  UPDATE_JOB_SUCCEED = "[Jobs] UPDATE_JOB_SUCCEED",
  UPDATE_JOB_FAILURE = "[Jobs] UPDATE_JOB_FAILURE",
  DELETE_SUGGESTED_JOB = "[Jobs] DELETE_SUGGESTED_JOB",
  DELETE_SUGGESTED_JOB_SUCCEED = "[Jobs] DELETE_SUGGESTED_JOB_SUCCEED",
  DELETE_SUGGESTED_JOB_FAILURE = "[Jobs] DELETE_SUGGESTED_JOB_FAILURE",
  CREATE_NEW_JOB_SUCCEED = 'CREATE_NEW_JOB_SUCCEED',
  CREATE_NEW_JOB_FAILURE = 'CREATE_NEW_JOB_FAILURE',
  CREATE_NEW_JOB = 'CREATE_NEW_JOB'
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

export class UpdateJob implements Action {
  readonly type = JobsActionsTypes.UPDATE_JOB;
  constructor() {
  }
}

export class UpdateJobSucceed implements Action {
  readonly type = JobsActionsTypes.UPDATE_JOB_SUCCEED;
  constructor() {
  }
}

export class UpdateJobFailure implements Action {
  readonly type = JobsActionsTypes.UPDATE_JOB_FAILURE;
  constructor() {
  }
}

export class DeleteSuggestedJob implements Action {
  readonly type = JobsActionsTypes.DELETE_SUGGESTED_JOB;
  constructor() {
  }
}

export class DeleteSuggestedJobSucceed implements Action {
  readonly type = JobsActionsTypes.DELETE_SUGGESTED_JOB_SUCCEED;
  constructor(public payload: any) {
  }
}

export class DeleteSuggestedJobFailure implements Action {
  readonly type = JobsActionsTypes.DELETE_SUGGESTED_JOB_FAILURE;
  constructor(public payload: any) {
  }
}

export class CreateNewJob implements Action {
  readonly type = JobsActionsTypes.CREATE_NEW_JOB;
}

export class CreateNewJobSucceed implements Action {
  readonly type = JobsActionsTypes.CREATE_NEW_JOB_SUCCEED;
}

export class CreateNewJobFailure implements Action {
  readonly type = JobsActionsTypes.CREATE_NEW_JOB_FAILURE;
}

export type JobsTypes = GetAllJobs | GetAllJobsSuccess | GetAllJobsFailure
  | UpdateJob | UpdateJobSucceed | UpdateJobFailure
  | DeleteSuggestedJob | DeleteSuggestedJobSucceed | DeleteSuggestedJobFailure
  | CreateNewJob | CreateNewJobSucceed | CreateNewJobFailure;
