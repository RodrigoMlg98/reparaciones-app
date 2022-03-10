import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombaguaComponent } from './bombagua.component';

describe('BombaguaComponent', () => {
  let component: BombaguaComponent;
  let fixture: ComponentFixture<BombaguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BombaguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BombaguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
