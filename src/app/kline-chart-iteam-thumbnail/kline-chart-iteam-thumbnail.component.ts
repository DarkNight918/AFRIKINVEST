import { Component, OnInit, Input, OnChanges, ɵɵsetComponentScope } from '@angular/core';
import { SimpleChanges } from '@angular/core';

import { CommonService } from 'src/app/_services/common/common.service';
@Component({
  selector: 'app-kline-chart-iteam-thumbnail',
  templateUrl: './kline-chart-iteam-thumbnail.component.html',
  styleUrls: ['./kline-chart-iteam-thumbnail.component.scss']
})
export class KLineChartIteamThumbnailComponent implements OnChanges {
  @Input() isPositive?: boolean;
  @Input() isNegative?: boolean;
  @Input() pricePoints?: number[];
  @Input() goodPrice?: number;
  maxPrice?: number;
  minPrice?: number;
  diff?: number;
  xLength?: number;
  lineColor?: string;
  state?: string;
  pointArray?: string;
  constructor(public commonService : CommonService) { }
  getPriceYPoint(p: number) {
    const minH = 0.1 * this.maxPrice!
    if (this.diff! > minH) {
      return ((this.diff! - (p - this.minPrice!)) / this.diff!) * 1000
    } else {
      return 1000 - (((minH - this.diff!) / 2 + (p - this.minPrice!)) * 1000) / minH
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void{
    this.maxPrice = this.goodPrice! / Math.min(...this?.pricePoints!)
    this.minPrice = this.goodPrice! / Math.max(...this?.pricePoints!)
    const v1= this.goodPrice! / this.commonService.startPrice;
    const v2= this.goodPrice! / this.commonService.endPrice;
    
    this.diff = (this.maxPrice - this.minPrice)

    this.xLength = this.pricePoints?.length
    this.lineColor = this.isPositive ? '#39D0D8' : this.isNegative ? '#DA2EEF' : '#abc4ff'
    this.state = this.isPositive ? 'positive' : this.isNegative ? 'negative' : 'normal'
    this.pointArray = this.pricePoints!
                .map((p, i) => {
                  const y = this.getPriceYPoint(this.goodPrice! / p) ;
                  const x = (i / this.xLength!) * 2000
                  
                  return `${x},${y}`
                })
                .join(' ')
  }
  
}
