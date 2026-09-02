import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing-module';
import { At1 } from './at1/at1';

@NgModule({
  declarations: [At1],
  imports: [CommonModule, Ex1RoutingModule],
})
export class Ex1Module {}
