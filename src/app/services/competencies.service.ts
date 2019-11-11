import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competency } from '../models/competency.model';

@Injectable()
export class CompetenciesService {
  private BASE_URL: string = "http://localhost:3000/competencies";

  constructor(
    private http: HttpClient
  ) { }

  get competencies(): Observable<Competency[]> {
    return this.http.get<Competency[]>(this.BASE_URL);
  }
}
