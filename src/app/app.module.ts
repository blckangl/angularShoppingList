import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShoppingItemComponent} from './shopping-item/shopping-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingToolbarComponent} from './shopping-toolbar/shopping-toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailsComponent} from './item-details/item-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: ItemDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    ShoppingListComponent,
    ShoppingToolbarComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
