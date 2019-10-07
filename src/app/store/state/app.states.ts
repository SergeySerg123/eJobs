import {IState, authReducers } from '../reducers/auth.reducers';
import {IJobs, jobsReducers} from "../reducers/jobs.reducers";


export interface AppState {
  auth: IState;
  jobsList: IJobs;
}

export const reducers = {
  auth: authReducers,
  jobsList: jobsReducers
};
