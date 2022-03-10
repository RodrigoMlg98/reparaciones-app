import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaporComponent } from './vapor.component';

describe('VaporComponent', () => {
  let component: VaporComponent;
  let fixture: ComponentFixture<VaporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaporComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
