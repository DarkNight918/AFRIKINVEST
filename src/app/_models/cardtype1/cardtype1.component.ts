import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from '../real-estate';
import { CommonService } from 'src/app/_services/common/common.service';
import { KLineChartIteamThumbnailComponent } from 'src/app/kline-chart-iteam-thumbnail/kline-chart-iteam-thumbnail.component';

@Component({
  selector: 'app-cardtype1',
  templateUrl: './cardtype1.component.html',
  styleUrls: ['./cardtype1.component.scss']
})
export class Cardtype1Component implements OnInit {
  @Input() info?: RealEstate;
  constructor(public commonService : CommonService ) {}

  ngOnInit(): void {
  }
}
