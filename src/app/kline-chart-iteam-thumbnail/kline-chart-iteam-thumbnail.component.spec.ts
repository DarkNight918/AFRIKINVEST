import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KLineChartIteamThumbnailComponent } from './kline-chart-iteam-thumbnail.component';

describe('KLineChartIteamThumbnailComponent', () => {
  let component: KLineChartIteamThumbnailComponent;
  let fixture: ComponentFixture<KLineChartIteamThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KLineChartIteamThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KLineChartIteamThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
