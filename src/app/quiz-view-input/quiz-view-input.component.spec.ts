import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewInputComponent } from './quiz-view-input.component';

describe('QuizViewInputComponent', () => {
  let component: QuizViewInputComponent;
  let fixture: ComponentFixture<QuizViewInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizViewInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizViewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
