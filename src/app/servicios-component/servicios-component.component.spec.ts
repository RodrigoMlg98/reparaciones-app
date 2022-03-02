import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComponentComponent } from './servicios-component.component';

describe('ServiciosComponentComponent', () => {
  let component: ServiciosComponentComponent;
  let fixture: ComponentFixture<ServiciosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
