import { Component, OnInit } from '@angular/core';
import {CoursesClientService} from "../../../services/courses-client.service";
import {Course} from "../../../models/course.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.states";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  coursesList: Course[] = null;
  loading: boolean = false;

  constructor(
    private coursesClient: CoursesClientService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.coursesClient.GetAllCourses();
    this.store.subscribe(appState => {
      this.coursesList = appState.coursesList.coursesList;
      this.loading = appState.coursesList.loading;
    });
  }

}
