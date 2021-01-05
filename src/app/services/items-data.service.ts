import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ShoppingItem} from '../../Models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  public itemsList: Subject<ShoppingItem[]> = new Subject<ShoppingItem[]>();
  private shoppingItems: ShoppingItem[] = [];

  constructor(private http: HttpClient) {
  }


  getAllItems(): void {
    // @ts-ignore
    return this.http.get('https://localhost:44351/api/items').subscribe(data => {
      this.shoppingItems = [...data];
      console.log(this.shoppingItems);
      this.itemsList.next(this.shoppingItems);
    });
  }

  postItem(body: any): void {
    console.log(body);
     this.http.post('https://localhost:44351/api/items', body).subscribe(data=>{
       this.getAllItems();
     });
  }
}
