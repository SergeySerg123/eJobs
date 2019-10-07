import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullJobPositionComponent } from './full-job-position.component';

describe('FullJobPositionComponent', () => {
  let component: FullJobPositionComponent;
  let fixture: ComponentFixture<FullJobPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullJobPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullJobPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
