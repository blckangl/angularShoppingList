import {Component} from '@angular/core';
import {ShoppingItem} from '../Models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppinglist';


  items: number[] = [1, 2, 3, 4, 5, 6];
}
