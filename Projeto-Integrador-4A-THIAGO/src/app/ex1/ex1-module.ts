import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing-module';
import { At1 } from './at1/at1';
import { At2 } from './at2/at2';
import { At3 } from './at3/at3';
import { At4 } from './at4/at4';

@NgModule({
  declarations: [At1, At2, At3, At4],
  imports: [CommonModule, Ex1RoutingModule],
})
export class Ex1Module {}
