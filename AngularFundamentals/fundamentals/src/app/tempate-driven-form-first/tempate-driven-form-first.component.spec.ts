import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateDrivenFormFirstComponent } from './tempate-driven-form-first.component';

describe('TempateDrivenFormFirstComponent', () => {
  let component: TempateDrivenFormFirstComponent;
  let fixture: ComponentFixture<TempateDrivenFormFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempateDrivenFormFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateDrivenFormFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
