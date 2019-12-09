import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanLangTabComponent } from './german-lang-tab.component';

describe('GermanLangTabComponent', () => {
  let component: GermanLangTabComponent;
  let fixture: ComponentFixture<GermanLangTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanLangTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanLangTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
