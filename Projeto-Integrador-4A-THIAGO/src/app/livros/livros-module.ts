import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Listagem } from './listagem/listagem';

const routes: Routes = [

{ path: 'cadastro', component: Cadastro},
{ path: 'listagem' , component: Listagem}

];

@NgModule({
  declarations: [Listagem],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}