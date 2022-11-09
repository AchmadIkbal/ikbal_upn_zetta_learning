import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KasirRoutingModule } from './kasir/kasir.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KasirRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }