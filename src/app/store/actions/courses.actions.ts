import {Action} from "@ngrx/store";
import {Course} from "../../models/course.model";

export enum CoursesActionsTypes {
  GET_ALL_COURSES= "[Courses] GET_ALL_COURSES",
  GET_ALL_COURSES_SUCCESS = "[Courses] GET_ALL_COURSES_SUCCESS",
  GET_ALL_COURSES_FAILURE = "[Courses] GET_ALL_COURSES_FAILURE"
}

export class GetAllCourses implements Action {
  readonly type = CoursesActionsTypes.GET_ALL_COURSES;
  constructor() { }
}

export class GetAllCoursesSucceed implements Action {
  readonly type = CoursesActionsTypes.GET_ALL_COURSES_SUCCESS;
  constructor(public payload: Course[]) { }
}

export class GetAllCoursesFailure implements Action {
  readonly type = CoursesActionsTypes.GET_ALL_COURSES_FAILURE;
  constructor(public payload: any) { }
}
