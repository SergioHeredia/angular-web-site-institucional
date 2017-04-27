import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { GiphyModule } from './giphy/giphy.module';
import { GiphyService } from './giphy/giphy.service';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule,
	ContatoModule,
	NossaVisaoModule,
	QuemSomosModule,
	GiphyModule
			
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
