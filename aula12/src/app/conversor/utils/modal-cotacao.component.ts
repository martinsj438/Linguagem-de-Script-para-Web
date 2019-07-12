import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConversaoResponse, Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id:string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Input () onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorServices: ConversorService) { }

  ngOnInit(){

  }

  novaConsulta() {
    this.onConfirm.emit();
    }

    get valorConvertido():string{
      if(this.conversaoResponse===undefined){
        return '0';
    }
    return(this.conversao.valor *
      this.conversaoResponse.rate[this.conversao.moedaPara])
      .toFixed(2);
  }

  get cotacaoPara():number{
    return this.conversorService.cotacaoPara(
      this.conversaoResponse, this.conversao
      );
    }

    get cotacaoDe():string{
      return this.conversorServices.cotacaoDe(
        this.conversaoResponse,  this.conversao
      );
    }
    
    dataCotacao():string{
      return this.conversorServices.dataCotacao(
        this.conversaoResponse);
      
    }
  }


