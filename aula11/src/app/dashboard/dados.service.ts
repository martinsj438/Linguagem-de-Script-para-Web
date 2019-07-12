import { Injectable } from '@angular/core';//importar Observable = faz a leitura das informaçoes
//do service e do component

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

  readonly dados = [
   ['Janeiro',33],
   ['Fevereiro',68],
   ['Março',49],
   ['Abril',15],
   ['Maio',80],
   ['Junho',27],
  ];

  constructor() { }

  obterDados():Observable<any>{
    return new Observable(observable=>{
      observable.next(this.dados);
      observable.complete();
    })

  }

}
