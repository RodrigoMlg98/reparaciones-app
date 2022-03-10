import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidroneumaticoComponent } from './hidroneumatico.component';

describe('HidroneumaticoComponent', () => {
  let component: HidroneumaticoComponent;
  let fixture: ComponentFixture<HidroneumaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidroneumaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidroneumaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
