import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuggestionsComponent } from './my-suggestions.component';

describe('MySuggestionsComponent', () => {
  let component: MySuggestionsComponent;
  let fixture: ComponentFixture<MySuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
