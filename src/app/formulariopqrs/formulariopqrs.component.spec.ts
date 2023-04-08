import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopqrsComponent } from './formulariopqrs.component';

describe('FormulariopqrsComponent', () => {
  let component: FormulariopqrsComponent;
  let fixture: ComponentFixture<FormulariopqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariopqrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariopqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
