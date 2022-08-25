import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryNewsComponent } from './luxury-news.component';

describe('LuxuryNewsComponent', () => {
  let component: LuxuryNewsComponent;
  let fixture: ComponentFixture<LuxuryNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
