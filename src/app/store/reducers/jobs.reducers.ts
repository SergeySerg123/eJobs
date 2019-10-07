import {JobsActionsTypes, JobsTypes} from "../actions/jobs.actions";
import {Job} from "../../models/job.model";

export interface IJobs {
  loading: boolean;
  jobsList: Job[] | null;
  selectedJob: Job | null;
  error: boolean;
}

export const initialState: IJobs = {
  loading: false,
  jobsList: null,
  selectedJob: null,
  error: false
};

export function jobsReducers(state = initialState, action: JobsTypes): IJobs {
  switch (action.type) {
    case JobsActionsTypes.GET_ALL_JOBS:
      return {
        ...state,
        loading: true,
        jobsList: null,
        error: false
      };

    case JobsActionsTypes.GET_ALL_JOBS_SUCCESS:
     return {
       ...state,
       loading: false,
       jobsList: action.payload,
       error: false
     };

     case JobsActionsTypes.GET_ALL_JOBS_FAILURE:
       return {
         ...state,
         loading: false,
         jobsList: null,
         error: true
       };

    default:
      return state;
  }
}
