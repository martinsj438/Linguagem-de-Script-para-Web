import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nomeCurso:string;
  cursos:string[]=['Angular','HTML','JAVA'];

  constructor() { 
    this.nomeCurso='Senac'
    for(let i=0;i<this.cursos.length;i++){
      let curso=this.cursos[i];
    }

  }

  ngOnInit() {
  }

}
