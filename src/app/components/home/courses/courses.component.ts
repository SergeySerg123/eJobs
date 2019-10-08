import { Component, OnInit } from '@angular/core';
import {CoursesClientService} from "../../../services/courses-client.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(
    private coursesClient: CoursesClientService
  ) { }

  ngOnInit() {
  }

}
