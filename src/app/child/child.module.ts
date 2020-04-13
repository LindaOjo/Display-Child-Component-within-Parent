import { ChildComponent } from './child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildComponent]
})
export class ChildModule { }
