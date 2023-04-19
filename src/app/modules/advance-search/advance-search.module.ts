import { CommanModuleModule } from './../comman/comman.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchRoutingModule } from './advance-search-routing.module';
import { AdvanceSearchMainBodyComponent } from './component/advance-search-main-body/advance-search-main-body.component';


@NgModule({
  declarations: [
    AdvanceSearchMainBodyComponent
  ],
  imports: [
    CommonModule,
    AdvanceSearchRoutingModule,
    CommanModuleModule
  ]
})
export class AdvanceSearchModule { }
