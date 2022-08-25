import { Component, OnInit, ViewChild } from '@angular/core';

import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { RealEstate } from 'src/app/_models/real-estate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  realestates : RealEstate[] =[{img:"news/img-1.png", name:"House in Senegal", price:90000, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"news/img-2.png", name:"Apartment in Senegal", price:80678, isVideo:true, isNew:true, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"news/img-3.png", name:"Penthouse in Senegal", price:40999, isVideo:false, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]},
  {img:"news/img-4.png", name:"Villa in Senegal", price:190000, isVideo:true, isNew:false, details: ["3 Bedrooms", "2 Bathrooms","200 m²"]}];
  activePopularSearchesSlide = 1;
  activePopularLinksSlide = 1;

  popularSearchesOptions: OwlOptions = {
    loop: false,
    margin: 12,
    autoplay: false,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      }      
    }    
  }

  popularLinksOptions: OwlOptions = {
    loop: false,
    margin: 12,
    autoplay: false,
    dots: false,
    nav: false,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      }      
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  getActivePopularSearchesSlide(data: SlidesOutputData) {
    this.activePopularSearchesSlide = +data.startPosition! + 1;
  }

  getActivePopularLinksSlide(data: SlidesOutputData) {
    this.activePopularLinksSlide = +data.startPosition! + 1;
  }
} 
