import {Injectable, OnInit} from '@angular/core';
import {AuthServiceClient} from "./auth-client.service";
import {Observable} from "rxjs";
import {Job} from "../models/job.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class JobsService implements OnInit{
  private token: string;
  private BASE_URL: string = "http://localhost:3000/";

  constructor(
    private authClient: AuthServiceClient,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.token = this.authClient.token;
  }

  getJobsList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.BASE_URL + "jobs", this.getOptions());
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(this.BASE_URL + "jobs" + `/${id}`, this.getOptions());
  }

  // Take Job object
  updateSuggestionList(job: Job): Observable<Job>{
    return this.http.put<Job>(this.BASE_URL + "jobs" + `/${job.id}`, job,this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    }
  }
}
