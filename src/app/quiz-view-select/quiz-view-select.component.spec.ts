import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewSelectComponent } from './quiz-view-select.component';

describe('QuizViewSelectComponent', () => {
  let component: QuizViewSelectComponent;
  let fixture: ComponentFixture<QuizViewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizViewSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
