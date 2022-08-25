import { Component, OnInit } from '@angular/core';

import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { RealEstate } from 'src/app/_models/real-estate';
@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit {
  realestates : RealEstate[] =[{img:"real-estate/img-1.png", name:"Country house in Saly", price:90000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-2.png", name:"Luxury home In Cap Skiring", price:190000, isVideo:true, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-3.png", name:"Residential complexes in Dakar Almadie", price:50900, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-4.png", name:"Penthouse in central Dakar", price:790000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-5.png", name:"Designer villas in Somone", price:1190000, isVideo:true, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-6.png", name:"House with exceptional views in Saly", price:679000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-7.png", name:"Elegant style view in Casamance", price:89000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-8.png", name:"Exclusive home in Dakar", price:90000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-9.png", name:"Townhouse in Senegal", price:140000, isVideo:true, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-10.png", name:"Properties in Dakar", price:990000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-11.png", name:"Luxury villas in Saly", price:50000, isVideo:true, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"real-estate/img-12.png", name:"Penthouse in Senegal", price:80000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]}];
  popularLinksOptions: OwlOptions = {
    loop: true,
    margin: 20,
    autoplay: false,
    dots: false,
    nav: true,
    stagePadding: 68,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
