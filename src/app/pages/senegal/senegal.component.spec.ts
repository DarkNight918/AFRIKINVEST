import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenegalComponent } from './senegal.component';

describe('SenegalComponent', () => {
  let component: SenegalComponent;
  let fixture: ComponentFixture<SenegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
