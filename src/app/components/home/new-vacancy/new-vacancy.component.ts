import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JobsClientService} from "../../../services/jobs-client.service";

@Component({
  selector: 'app-new-vacancy',
  templateUrl: './new-vacancy.component.html',
  styleUrls: ['./new-vacancy.component.scss']
})
export class NewVacancyComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobsClient: JobsClientService
  ) { }
// convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      position: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      type: ['', [Validators.required]],
      stack: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  //On submit form
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      position: this.registerForm.value.position,
      country: this.registerForm.value.country,
      city: this.registerForm.value.city,
      salary: this.registerForm.value.salary,
      type: this.registerForm.value.type,
      stack: this.registerForm.value.stack,
      description: this.registerForm.value.description
    };

    this.jobsClient.CreateJob(payload);
  }

}
