import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ActivtyComponent } from './activty/activty.component';



@NgModule({
  declarations: [CardComponent, ActivtyComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent,ActivtyComponent]
})
export class SharedModule { }
