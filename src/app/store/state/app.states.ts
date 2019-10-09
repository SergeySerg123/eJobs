import {IState, authReducers } from '../reducers/auth.reducers';
import {IJobs, jobsReducers} from "../reducers/jobs.reducers";
import {ICourses, coursesReducers } from "../reducers/courses.reducers";


export interface AppState {
  auth: IState;
  jobsList: IJobs;
  coursesList: ICourses;
}

export const reducers = {
  auth: authReducers,
  jobsList: jobsReducers,
  coursesList: coursesReducers
};
