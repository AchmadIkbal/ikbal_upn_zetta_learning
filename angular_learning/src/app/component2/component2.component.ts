import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';
  @Output('itCreated') itemCreated = new EventEmitter<{
    item_name: string;
    item_status: string;
  }>();
  @ViewChild('itemNameInput')
  itemNameInput!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(name: HTMLInputElement) {
    console.log(this.itemNameInput);
    // this.itemNameList.push(this.itemName);
    // this.itemStatusList.push(this.itemStatus);
    this.itemCreated.emit({
      // item_name: this.newItemName,
      item_status: this.newItemStatus,
      // item_name: name.value,
      item_name: this.itemNameInput.nativeElement.value,
    });
    this.newItemName = '';
    this.newItemStatus = '';
  }
}