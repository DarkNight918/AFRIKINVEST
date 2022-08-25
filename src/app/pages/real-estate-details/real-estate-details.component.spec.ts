import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateDetailsComponent } from './real-estate-details.component';

describe('RealEstateDetailsComponent', () => {
  let component: RealEstateDetailsComponent;
  let fixture: ComponentFixture<RealEstateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
