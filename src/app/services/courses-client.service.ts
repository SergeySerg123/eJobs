import { Injectable } from '@angular/core';
import {CoursesService} from "./courses.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/state/app.states";
import {GetAllCourses, GetAllCoursesFailure, GetAllCoursesSucceed} from "../store/actions/courses.actions";

@Injectable()
export class CoursesClientService {

  constructor(
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) { }

  GetAllCourses() {
    this.store.dispatch(new GetAllCourses());
    this.coursesService.getAllCourses().subscribe(courses => {
      this.store.dispatch(new GetAllCoursesSucceed(courses));
    }, error => {this.store.dispatch(new GetAllCoursesFailure(error))});
  }
}
