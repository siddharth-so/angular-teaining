import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: RecipeComponentComponent
  },
  { path: 'recipe', component: RecipeComponentComponent },
  { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
