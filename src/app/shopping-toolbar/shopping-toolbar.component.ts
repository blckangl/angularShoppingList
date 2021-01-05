import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingItem} from '../../Models/shopping-item.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ItemsDataService} from '../services/items-data.service';

@Component({
  selector: 'app-shopping-toolbar',
  templateUrl: './shopping-toolbar.component.html',
  styleUrls: ['./shopping-toolbar.component.scss']
})
export class ShoppingToolbarComponent implements OnInit {

  @Output() onShoppingItemAdded: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('qteInput') qteInput: ElementRef;
  itemsForm: FormGroup;

  constructor(private dataService: ItemsDataService) {
  }

  ngOnInit(): void {
    this.itemsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      qte: new FormControl(1, [Validators.required, Validators.min(1)])
    });
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


  onItemAdded(): void {
    const itm = new ShoppingItem(this.itemsForm.value.name, this.itemsForm.value.qte);
    this.dataService.postItem(itm);
  }
}
