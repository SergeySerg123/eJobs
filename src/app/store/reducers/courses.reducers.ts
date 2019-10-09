import {Course} from "../../models/course.model";
import {CoursesActionsTypes} from "../actions/courses.actions";

export interface ICourses {
  loading: boolean;
  coursesList: Course[] | null;
  error: boolean;
}

const initialState: ICourses = {
  loading: false,
  coursesList: null,
  error: false
};

export function coursesReducers(state = initialState, action): ICourses {
  switch (action.type) {
    case CoursesActionsTypes.GET_ALL_COURSES:
      return {
        ...state,
        loading: true,
        error: false
      };

    case CoursesActionsTypes.GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        coursesList: action.payload,
        error: false
      };

    case CoursesActionsTypes.GET_ALL_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        coursesList: null,
        error: true
      };

    default:
      return state;
  }
}
