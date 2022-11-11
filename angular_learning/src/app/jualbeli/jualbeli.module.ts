import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JualBeliRoutingModule } from './jualbeli-routing.module';
import { KasirComponent } from './kasir/kasir.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { BayarComponent } from './bayar/bayar.component';

@NgModule({
  declarations: [
    KasirComponent,
    MenuComponent,
    PaymentComponent,
    BayarComponent
  ],
  imports: [
    CommonModule,
    JualBeliRoutingModule
  ]
})
export class JualBeliModule { }