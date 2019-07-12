import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './componente';
import { CalculadoraService } from './services/calculadora.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculadoraComponent],
  providers:[
    CalculadoraService
  ],
  exports:[CalculadoraComponent]
})
export class CalculadoraModule { }
