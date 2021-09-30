import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncPipeComponent } from './async-pipe.component';


@NgModule({
  declarations: [AsyncPipeComponent],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ]
})
export class AsyncModule { }
