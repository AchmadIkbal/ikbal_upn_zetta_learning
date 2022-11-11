import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemList = [
    { itemName: 'Item 1', itemStatus: 'Good' },
    { itemName: 'Item 2', itemStatus: 'Broken' },
    { itemName: 'Item 3', itemStatus: 'Broken' },
    { itemName: 'Item 4', itemStatus: 'Good' },
    { itemName: 'Item 5', itemStatus: 'Good' },
  ];
  onAddItem(itemData: { item_name: string; item_status: string }) {
    this.itemList.push({
      itemName: itemData.item_name,
      itemStatus: itemData.item_status,
    });
  }
  changeStatus(index: number) {
    if (this.itemList[index].itemStatus === 'Good') {
      this.itemList[index].itemStatus = 'Broken';
    } else {
      this.itemList[index].itemStatus = 'Good';
    }
  }
  destroyItem(index: number) {
    this.itemList.splice(index, 1);
  }
}