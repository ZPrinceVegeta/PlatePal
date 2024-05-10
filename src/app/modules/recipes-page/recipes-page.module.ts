import { CommanModuleModule } from './../comman/comman.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesPageRoutingModule } from './recipes-page-routing.module';
import { RecipePageDisplayComponent } from './components/recipe-page-display/recipe-page-display.component';
import { RecipeInstructionComponent } from './components/recipe-instruction/recipe-instruction.component';
import { RecipeVideoComponent } from './components/recipe-video/recipe-video.component';
import { MoreRecipeCardComponent } from './components/more-recipe-card/more-recipe-card.component';
import { RecipeMainComponent } from './components/recipe-main/recipe-main.component';
import { CompilationDisplayComponent } from './components/compilation-display/compilation-display.component';

@NgModule({
  declarations: [
    RecipePageDisplayComponent,
    RecipeInstructionComponent,
    RecipeVideoComponent,
    MoreRecipeCardComponent,
    RecipeMainComponent,
    CompilationDisplayComponent
  ],
  imports: [
    CommonModule,
    RecipesPageRoutingModule,
    CommanModuleModule,

  ]
})
export class RecipesPageModule { }
