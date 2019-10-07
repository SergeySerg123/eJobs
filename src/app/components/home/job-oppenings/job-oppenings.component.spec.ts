import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppeningsComponent } from './job-oppenings.component';

describe('JobOppeningsComponent', () => {
  let component: JobOppeningsComponent;
  let fixture: ComponentFixture<JobOppeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOppeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOppeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
