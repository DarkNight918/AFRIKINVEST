import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardtype1Component } from './cardtype1.component';

describe('Cardtype1Component', () => {
  let component: Cardtype1Component;
  let fixture: ComponentFixture<Cardtype1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardtype1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardtype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
