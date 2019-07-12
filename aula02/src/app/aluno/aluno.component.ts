import { Component, OnInit } from '@angular/core';
import { Aluno } from 'app/Aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos=[];

  aluno:Aluno={
    matricula:0,
    nome:"",
    cpf:0,
    telefone:"",
    email:"",
    
  }
  addAluno(){
    let newAluno=Object.assign({},this.aluno);
    this.alunos.push(newAluno);
  }

  constructor() { }

  ngOnInit() {
  }

}
