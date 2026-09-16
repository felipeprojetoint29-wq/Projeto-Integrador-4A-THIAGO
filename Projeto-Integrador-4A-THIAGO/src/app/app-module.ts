import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CadastroLivro } from './Livros/cadastro-livro/cadastro-livro';
import { At1 } from './ex1/at1/at1';

@NgModule({
  declarations: [App, CadastroLivro], // At1 sai daqui
  imports: [

    At1 
  ]
})
export class AppModule {}