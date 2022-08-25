import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  currentCrypto : string = "";
  pricePoints : number[] = [];
  currency : number = 0;
  floatPercent : number = 0;
  startPrice : number = 0;
  endPrice: number = 0;
  setCrypto(newCrypto: string) {
    this.currentCrypto = newCrypto;
  }
  getCryptoData(url:any){
    return this.http.get(url)
  }
  getCryptoDataSynchronous():Promise<any>{
    type tplotOptions = {
      [key: string]: string
    }
    type tplotOptions1 = {
        [key: number]: number
    }
    const cryptoID : tplotOptions={Bitcoin:"bitcoin", "Ethereum":"ethereum", "Tether":"tether", "USD_Coin":"usd-coin", "BNB":"binancecoin"}
    const url="https://api.coingecko.com/api/v3/coins/"+ cryptoID[this.currentCrypto] + "/market_chart?vs_currency=usd&days=90";
    return this.getCryptoData(url).toPromise();
  }
  async setCryptoData(){
    let response = await this.getCryptoDataSynchronous()
    this.pricePoints = [];
    for(var i = 0 ; i < response.prices.length; i ++) this.pricePoints.push(response.prices[i][1]);
    this.currency = this.pricePoints[this.pricePoints.length - 1]
    this.startPrice = this.pricePoints?.[0] 
    this.endPrice = this.pricePoints?.[this.pricePoints.length - 1]
    this.floatPercent = (this.startPrice) && this.endPrice ? (this.endPrice - this.startPrice) / this.startPrice : 0
  }
  constructor(  private http: HttpClient) { }
}
