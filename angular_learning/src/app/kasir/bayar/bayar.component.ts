import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Toko } from '../kasir/kasir.component';
import { selectedGame } from '../kasir/kasir.component';
@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit, AfterContentChecked {
  @Output ('gameAdded') onAddGame : EventEmitter<Toko> = new EventEmitter<Toko>()
  @Input() games!: selectedGame[];

  public total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.games.reduce((total, toko) => total += toko.jumlah * toko.harga , 0)
  }

}