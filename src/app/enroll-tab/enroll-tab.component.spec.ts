import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTabComponent } from './enroll-tab.component';

describe('EnrollTabComponent', () => {
  let component: EnrollTabComponent;
  let fixture: ComponentFixture<EnrollTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
