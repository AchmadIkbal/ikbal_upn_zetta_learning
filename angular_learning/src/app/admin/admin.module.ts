import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KantorComponent } from './kantor/kantor.component';
import { WebsiteComponent } from './website/website.component';
import { HostingComponent } from './hosting/hosting.component';



@NgModule({
  declarations: [
    KantorComponent,
    WebsiteComponent,
    HostingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
