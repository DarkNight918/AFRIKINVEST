import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RealEstateDetailsComponent } from './real-estate-details/real-estate-details.component';
import { LuxuryNewsComponent } from './luxury-news/luxury-news.component';
import { SenegalComponent } from "./senegal/senegal.component";
import { AboutUsComponent } from "./about-us/about-us.component";
const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'properties',
      component: PropertiesComponent
    },
    {
      path: 'real-estate',
      component: RealEstateComponent
    },
    {
      path: 'real-estate-details',
      component: RealEstateDetailsComponent
    },
    {
      path: 'luxury-news',
      component: LuxuryNewsComponent
    },
    {
      path: 'senegal',
      component: SenegalComponent
    },
    {
      path: 'about-us',
      component: AboutUsComponent
    }    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  export const RoutingComponents = [
    HomeComponent,
    PropertiesComponent, RealEstateComponent, RealEstateDetailsComponent, LuxuryNewsComponent,
    SenegalComponent, AboutUsComponent
  ]