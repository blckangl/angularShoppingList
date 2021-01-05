import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from '../../Models/shopping-item.model';
import {ItemsDataService} from '../services/items-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shoppingItems: ShoppingItem[] = [];

  constructor(private itemsdata: ItemsDataService) {
    // this.shoppingItems.push(new ShoppingItem('item1', 10));
    // this.shoppingItems.push(new ShoppingItem('item2', 50));
    // this.shoppingItems.push(new ShoppingItem('item3', 60));

  }

  AddItem($event: ShoppingItem): void {
    this.shoppingItems.push($event);
  }

  DeleteItem($event: ShoppingItem): void {
    const index = this.shoppingItems.findIndex((x) => x.id === $event.id);
    this.shoppingItems.splice(index, 1);
  }

  ngOnInit(): void {
    this.itemsdata.getAllItems();
    this.itemsdata.itemsList.subscribe(next => {
      this.shoppingItems = [...next];
      console.log(this.shoppingItems);
    });
  }

}
