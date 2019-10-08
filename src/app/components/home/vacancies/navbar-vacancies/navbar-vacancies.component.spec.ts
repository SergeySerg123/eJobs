import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVacanciesComponent } from './navbar-vacancies.component';

describe('NavbarVacanciesComponent', () => {
  let component: NavbarVacanciesComponent;
  let fixture: ComponentFixture<NavbarVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
