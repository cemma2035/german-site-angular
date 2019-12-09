import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTabComponent } from './blog-tab.component';

describe('BlogTabComponent', () => {
  let component: BlogTabComponent;
  let fixture: ComponentFixture<BlogTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
