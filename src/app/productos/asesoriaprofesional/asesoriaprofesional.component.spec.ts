import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaprofesionalComponent } from './asesoriaprofesional.component';

describe('AsesoriaprofesionalComponent', () => {
  let component: AsesoriaprofesionalComponent;
  let fixture: ComponentFixture<AsesoriaprofesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoriaprofesionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoriaprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
