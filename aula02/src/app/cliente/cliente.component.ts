import { Component, OnInit } from '@angular/core';
import { cliente } from 'app/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes=[];

  cliente:cliente={
    nome:"",
    idade:0
  }
  addcliente(){
    let newcliente=Object.assign({},this.cliente);
    this.clientes.push(newcliente);
  }

  constructor() { }

  ngOnInit() {
  }

}
