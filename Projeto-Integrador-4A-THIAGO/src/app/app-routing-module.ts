import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m=> m.LivrosModule)
  },

{
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule)
  },

  {
    path: 'ex1',
    loadChildren: ()=> import('./ex1/ex1-module').then(m => m.Ex1Module)
},
  
{
  path: 'lista2',
  loadChildren: () =>
    import('./lista2/lista2-module').then(m => m.Lista2Module)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }