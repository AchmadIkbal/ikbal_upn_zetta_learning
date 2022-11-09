import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Toko {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})

export class KasirComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Toko> = new EventEmitter<Toko>()

  judul: string = 'List Menu';

  public games: Toko[] = [
    {
      id:'1',
      title: 'Hanger',
      harga:10000
    },
    {
      id:'2',
      title: 'Tissue',
      harga:15000
    },
    {
      id:'3',
      title: 'Aqua',
      harga:5000
    },
    {
      id:'4',
      title: 'Lem',
      harga:2000
    },
    {
      id:'5',
      title: 'Sedotan',
      harga:5000
    },
    {
      id:'6',
      title: 'Kertas',
      harga:500
    },
  ];

  public selectedGames : selectedGame[]=[]

  
  constructor() { }

  ngOnInit(): void { }

  addGame(toko :Toko){
    const duplicated =this.selectedGames.findIndex(({id})=>id===toko.id)
    let jumlah : 0;
    if(duplicated>=0){
      this.selectedGames[duplicated].jumlah+=1
    }
    else{
      this.selectedGames.push({...toko, jumlah: 1})
    }
  }

}