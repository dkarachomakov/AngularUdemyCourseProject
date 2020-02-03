import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNameCategoryMoneyBackComponent } from './course-name-category-money-back.component';

describe('CourseNameCategoryMoneyBackComponent', () => {
  let component: CourseNameCategoryMoneyBackComponent;
  let fixture: ComponentFixture<CourseNameCategoryMoneyBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNameCategoryMoneyBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNameCategoryMoneyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
