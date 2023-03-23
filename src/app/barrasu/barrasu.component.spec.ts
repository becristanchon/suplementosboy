import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasuComponent } from './barrasu.component';

describe('BarrasuComponent', () => {
  let component: BarrasuComponent;
  let fixture: ComponentFixture<BarrasuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
