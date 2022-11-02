import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeuanganComponent } from './keuangan/keuangan.component';
import { KantorComponent } from './kantor/kantor.component';
import { PendudukComponent } from './penduduk/penduduk.component';



@NgModule({
  declarations: [
    KeuanganComponent,
    KantorComponent,
    PendudukComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KasirModule { }
