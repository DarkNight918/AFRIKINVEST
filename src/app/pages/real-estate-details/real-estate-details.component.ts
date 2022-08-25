import { Component, OnInit } from '@angular/core';

import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.scss']
})
export class RealEstateDetailsComponent implements OnInit {
  propertyImagesOptions: OwlOptions = {
    loop: true,
    margin: 14,
    autoWidth: false,
    autoplay: false,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 4
      },
      768: {
        items: 4
      }
    }
  }

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
