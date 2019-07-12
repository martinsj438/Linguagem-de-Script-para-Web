import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './componentes';
import { MoedaService,ConversorService } from './services';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils';
//import { DataBrPipe } from './data-br.pipe';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe, DataBrPipe],
  exports:[ConversorComponent],
  providers:[MoedaService,ConversorService]
})
export class ConversorModule { }
