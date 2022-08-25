import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardtype2Component } from './cardtype2.component';

describe('Cardtype2Component', () => {
  let component: Cardtype2Component;
  let fixture: ComponentFixture<Cardtype2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardtype2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardtype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
