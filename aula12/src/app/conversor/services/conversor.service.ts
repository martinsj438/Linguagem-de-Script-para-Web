import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Conversao, ConversaoResponse } from '../models';
import { unimplemented } from '@angular/core/src/facade/errors';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest";

  constructor(private http:Http) { }

  converter(conversao:Conversao): Observable<ConversaoResponse>{
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http
    .get(this.BASE_URL + params)
    .map(response => response.json() as ConversaoResponse)

    .catch(error => Observable.throw(error));
  }

cotacaoPara(ConversaoResponse: ConversaoResponse, conversao: Conversao):number{
  if(ConversaoResponse === undefined){
    return 0;
  }
  return ConversaoResponse.rate[conversao.moedaPara];
 }
cotacaoDe(conversaoResponse : ConversaoResponse,
  conversao : Conversao): string {
    if(conversaoResponse === undefined){
      return '0';
    }
    return(1/ conversaoResponse.rate[conversao.moedaPara]).toFixed(4);
  } 
  dataCotacao(conversaoResponse : ConversaoResponse ):string{
    if(conversaoResponse === undefined){
      return '';
    }
    return conversaoResponse.date;
  }
}


