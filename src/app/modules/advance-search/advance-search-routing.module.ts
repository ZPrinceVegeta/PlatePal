import { AdvanceSearchMainBodyComponent } from './component/advance-search-main-body/advance-search-main-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "",component:AdvanceSearchMainBodyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceSearchRoutingModule { }
