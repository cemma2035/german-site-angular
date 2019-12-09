import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizViewFillComponent } from './quiz-view-fill.component';

describe('QuizViewFillComponent', () => {
  let component: QuizViewFillComponent;
  let fixture: ComponentFixture<QuizViewFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizViewFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizViewFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
