import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ShoppingItem} from '../../Models/shopping-item.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  public itemsList: Subject<ShoppingItem[]> = new Subject<ShoppingItem[]>();
  private shoppingItems: ShoppingItem[] = [];

  constructor(private http: HttpClient) {
  }


  getAllItems(): void {
    const token = localStorage.getItem('token');


    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${token}`);

    this.http.get<ShoppingItem[]>(environment.app_url + 'api/items', {headers}).subscribe(data => {
      this.shoppingItems = [...data];
      console.log(this.shoppingItems);
      this.itemsList.next(this.shoppingItems);
    });
  }

  postItem(body: any): void {
    console.log(body);
    this.http.post(environment.app_url + 'api/items', body).subscribe(data => {
      this.getAllItems();
    });
  }

  deleteItem(id: number): void {
    this.http.delete(environment.app_url + 'api/items/' + id).subscribe(next => {
      this.getAllItems();
    });
  }


  login(username: string, password: string) {
    this.http.post(environment.app_url + 'api/users/login', {username, password}).subscribe(data => {
      localStorage.setItem('token', data.token);
    });
  }


  isAuth(): boolean {
    const token = localStorage.getItem('token');
    if (token != null) {
      return true;
    } else {
      return false;
    }
  }

  singOut() {
    localStorage.clear();
  }
}
