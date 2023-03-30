import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraimcComponent } from './calculadoraimc.component';

describe('CalculadoraimcComponent', () => {
  let component: CalculadoraimcComponent;
  let fixture: ComponentFixture<CalculadoraimcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraimcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraimcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
