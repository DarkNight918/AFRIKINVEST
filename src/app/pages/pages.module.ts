import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule, RoutingComponents } from './pages-routing.module';
import { Cardtype1Component } from '../_models/cardtype1/cardtype1.component';
import { Cardtype2Component } from '../_models/cardtype2/cardtype2.component';
import { HomeComponent } from './home/home.component';
import { KLineChartIteamThumbnailComponent } from '../kline-chart-iteam-thumbnail/kline-chart-iteam-thumbnail.component';
@NgModule({
    declarations: [
      RoutingComponents,
      HomeComponent,
      Cardtype1Component,
      Cardtype2Component,
      KLineChartIteamThumbnailComponent
    ],
    imports: [
        SharedModule,
        CarouselModule, GoogleMapsModule,        
        PagesRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: []    
  })
  export class PagesModule { }