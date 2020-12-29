import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from '../../Models/shopping-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shoppingItems: ShoppingItem[] = [];

  constructor() {
    this.shoppingItems.push(new ShoppingItem('item1', 10));
    this.shoppingItems.push(new ShoppingItem('item2', 50));
    this.shoppingItems.push(new ShoppingItem('item3', 60));
  }

  AddItem($event: ShoppingItem): void {
    this.shoppingItems.push($event);
  }

  DeleteItem($event: ShoppingItem): void {
    const index = this.shoppingItems.findIndex((x) => x.id === $event.id);
    this.shoppingItems.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
