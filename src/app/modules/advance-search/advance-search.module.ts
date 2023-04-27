import { CommanModuleModule } from './../comman/comman.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchRoutingModule } from './advance-search-routing.module';
import { AdvanceSearchMainBodyComponent } from './component/advance-search-main-body/advance-search-main-body.component';
import { AdadvSearchHeaderComponent } from './component/adadv-search-header/adadv-search-header.component';
import { CardRecipeComponent } from './component/card-recipe/card-recipe.component';
import { CardExpandComponent } from './component/card-expand/card-expand.component';

@NgModule({
  declarations: [
    AdvanceSearchMainBodyComponent,
    AdadvSearchHeaderComponent,
    CardRecipeComponent,
    CardExpandComponent,
  ],
  imports: [
    CommonModule,
    AdvanceSearchRoutingModule,
    CommanModuleModule,

  ]
})
export class AdvanceSearchModule { }
