import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  hello : string[] = ["123123", "123123", "123123"];
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
      }
    }
  }
  ourMission = [
    {
      title: 'CEO of AFRIKINVEST',
      content: 'Our mission is to promote investment in Africa. The development of Africa depends largely on the volume and quality of investment it can attract. But over time, there have been some hostile misconceptions about the African continent, which gives investors cold feet towards investing despite the unlimited opportunities. We are here to change the narrative by projecting Africa positively, thereby making it more attractive to investors and boosting investment in Africa.',
      name: 'Abdoulaye BA',
      profilePic: 'assets/img/abdoulaye.png'
    },
    {
      title: 'Co-founder, CTO of AFRIKINVEST',
      content: 'Blockchain is not just a new business idea, it\'s looking to revolutionize the world. By removing opacity, Blockchain makes the world a fairer place. Meet the future of Africa. We have a pioneering time ahead of us, and it\'s time Africa took a step into the digital present.',
      name: 'Bachir Araf',
      profilePic: 'assets/img/bachir.jpg'
    }
  ]
  selectedMission = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextMission() {
    if (this.ourMission.length-1 > this.selectedMission) {
      this.selectedMission++;
    }
  }

  prevMission() {
    if (this.ourMission.length-1 <= this.selectedMission) {
      this.selectedMission--;
    }
  }
}
