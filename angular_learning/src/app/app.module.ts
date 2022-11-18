import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ServicesComponent } from './services/services.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemListComponent } from './item/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ServicesComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
