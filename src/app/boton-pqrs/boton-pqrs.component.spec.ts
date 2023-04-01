import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPQRSComponent } from './boton-pqrs.component';

describe('BotonPQRSComponent', () => {
  let component: BotonPQRSComponent;
  let fixture: ComponentFixture<BotonPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPQRSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
