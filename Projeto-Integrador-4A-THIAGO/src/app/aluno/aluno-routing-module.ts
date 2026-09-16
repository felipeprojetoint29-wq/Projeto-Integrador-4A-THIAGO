import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aluno } from './aluno';

const routes: Routes = [{ path: '', component: Aluno }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
