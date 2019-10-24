import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { RecipeListComponent } from './recipe-component/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-component/recipe-list/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipe-component/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicDirectiveDirective } from './directive/basic-directive.directive';
import { DropdownDirectiveDirective } from './directive/dropdown-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    FileUploadComponent,
    HeaderComponentComponent,
    RecipeComponentComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicDirectiveDirective,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
