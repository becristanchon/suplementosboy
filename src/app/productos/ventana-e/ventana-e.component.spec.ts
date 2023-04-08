import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEComponent } from './ventana-e.component';

describe('VentanaEComponent', () => {
  let component: VentanaEComponent;
  let fixture: ComponentFixture<VentanaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
