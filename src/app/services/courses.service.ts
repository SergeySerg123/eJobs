import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../models/course.model";

@Injectable()
export class CoursesService {
  private BASE_URL: string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.BASE_URL + 'courses');
  }
}
