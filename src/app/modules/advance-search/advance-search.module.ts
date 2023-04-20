import { CommanModuleModule } from './../comman/comman.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchRoutingModule } from './advance-search-routing.module';
import { AdvanceSearchMainBodyComponent } from './component/advance-search-main-body/advance-search-main-body.component';
import { AdadvSearchHeaderComponent } from './component/adadv-search-header/adadv-search-header.component';
import { FilterItemComponent } from './component/filter-item/filter-item.component';


@NgModule({
  declarations: [
    AdvanceSearchMainBodyComponent,
    AdadvSearchHeaderComponent,
    FilterItemComponent
  ],
  imports: [
    CommonModule,
    AdvanceSearchRoutingModule,
    CommanModuleModule
  ]
})
export class AdvanceSearchModule { }
