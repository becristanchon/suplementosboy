import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionalimentosComponent } from './informacionalimentos.component';

describe('InformacionalimentosComponent', () => {
  let component: InformacionalimentosComponent;
  let fixture: ComponentFixture<InformacionalimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionalimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionalimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
