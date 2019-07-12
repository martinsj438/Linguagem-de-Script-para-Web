import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/componente';
import{ CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent,
    //CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
