import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../../models/course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() list: Course[];
  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // not realised
  showFullInfo(id: string) {
    console.log("Course id: " + id);
  }
}
