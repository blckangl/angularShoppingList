import {Component, OnInit} from '@angular/core';
import {ItemsDataService} from '../services/items-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private itemDataService: ItemsDataService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.itemDataService.login('user1', '123456');
  }
}
