import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/common/common.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private commonService : CommonService) { }

  cryptos : string[] =["Bitcoin", "Ethereum", "Tether", "USD_Coin", "BNB"];
  selectedCrypto?: string;

  ngOnInit(): void {
    this.onSelect("Bitcoin");
  }
  
  toggleNavbar() {
    document.body.toggleAttribute('navbar-enable');
  }

  async onSelect(crypto: string) {
    this.selectedCrypto = crypto;
    this.commonService.setCrypto(this.selectedCrypto);
    this.commonService.setCryptoData();
  }
}
