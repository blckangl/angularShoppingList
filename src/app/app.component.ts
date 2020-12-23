import {Component} from '@angular/core';
import {ShoppingItem} from '../Models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppinglist';

  shoppingItems: ShoppingItem[] = [];

  constructor() {
    this.shoppingItems.push(new ShoppingItem('nale', 50));
  }

  AddItem($event: ShoppingItem): void {
    this.shoppingItems.push($event);
  }

  DeleteItem($event: ShoppingItem): void {
    const index = this.shoppingItems.findIndex((x) => x.id === $event.id);
    this.shoppingItems.splice(index, 1);
  }
}
