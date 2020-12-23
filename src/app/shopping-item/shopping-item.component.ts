import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingItem} from '../../Models/shopping-item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input('itemValue') item: ShoppingItem;
  @Output() onRemove: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.onRemove.emit(this.item);
  }
}
