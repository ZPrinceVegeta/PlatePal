import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeMainComponent } from './components/recipe-main/recipe-main.component';
import { RecipePageDisplayComponent } from './components/recipe-page-display/recipe-page-display.component';


const routes: Routes = [
  {path : "" ,  component :  RecipeMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesPageRoutingModule {

}
