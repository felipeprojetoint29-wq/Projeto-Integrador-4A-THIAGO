import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { Aluno } from './aluno';

@NgModule({
  declarations: [Aluno],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
