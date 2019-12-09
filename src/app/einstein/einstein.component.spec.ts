import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinComponent } from './einstein.component';

describe('EinsteinComponent', () => {
  let component: EinsteinComponent;
  let fixture: ComponentFixture<EinsteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinsteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinsteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
