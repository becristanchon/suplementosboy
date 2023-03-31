import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopadeportivaComponent } from './ropadeportiva.component';

describe('RopadeportivaComponent', () => {
  let component: RopadeportivaComponent;
  let fixture: ComponentFixture<RopadeportivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopadeportivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopadeportivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
