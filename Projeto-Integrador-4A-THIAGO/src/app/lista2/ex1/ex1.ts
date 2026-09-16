import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.html',
  styleUrl: './ex1.css'
})
export class Ex1 {
  mensagemVisivel: boolean = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}