import { ChildModule } from './../child/child.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildModule
  ]
})
export class ContainerModule { }
