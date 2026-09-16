import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2RoutingModule } from './lista2-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [/* outros componentes não-standalone */],
  imports: [CommonModule, Ex1], // importa em vez de declarar
})
export class Lista2Module { }
