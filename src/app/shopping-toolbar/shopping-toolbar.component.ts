import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingItem} from '../../Models/shopping-item.model';

@Component({
  selector: 'app-shopping-toolbar',
  templateUrl: './shopping-toolbar.component.html',
  styleUrls: ['./shopping-toolbar.component.scss']
})
export class ShoppingToolbarComponent implements OnInit {

  @Output() onShoppingItemAdded: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('qteInput') qteInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(): void {
    if (this.nameInput.nativeElement.value === '' || this.qteInput.nativeElement.value <= 0) {
      alert('Item is Empty');
      return;
    }
    const itm = new ShoppingItem(this.nameInput.nativeElement.value, this.qteInput.nativeElement.value);
    this.nameInput.nativeElement.value = '';
    this.qteInput.nativeElement.value = 0;
    this.onShoppingItemAdded.emit(itm);
  }


}
