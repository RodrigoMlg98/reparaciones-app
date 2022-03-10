import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacuzziComponent } from './jacuzzi.component';

describe('JacuzziComponent', () => {
  let component: JacuzziComponent;
  let fixture: ComponentFixture<JacuzziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacuzziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacuzziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
