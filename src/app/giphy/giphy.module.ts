
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';

@NgModule({
  imports: [
    CommonModule,
	GiphyRoutingModule
  ],
  declarations: [
  GiphyComponent
  ]
})
export class GiphyModule { }
