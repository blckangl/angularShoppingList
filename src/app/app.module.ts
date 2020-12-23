import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingToolbarComponent } from './shopping-toolbar/shopping-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    ShoppingListComponent,
    ShoppingToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
