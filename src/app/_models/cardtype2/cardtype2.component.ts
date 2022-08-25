import { Component, OnInit, Input } from '@angular/core';
import { RealEstate } from '../real-estate';
import { CommonService } from 'src/app/_services/common/common.service';
import { KLineChartIteamThumbnailComponent } from 'src/app/kline-chart-iteam-thumbnail/kline-chart-iteam-thumbnail.component';
@Component({
  selector: 'app-cardtype2',
  templateUrl: './cardtype2.component.html',
  styleUrls: ['./cardtype2.component.scss']
})
export class Cardtype2Component implements OnInit {

  @Input() info?: RealEstate;
  constructor(public commonService : CommonService ) {}

  ngOnInit(): void {
  }

}
