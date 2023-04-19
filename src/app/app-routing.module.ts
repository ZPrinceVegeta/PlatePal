import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./modules/comman/comman.module').then((m)=>m.CommanModuleModule)},
  {path:'search', loadChildren:()=>import('./modules/advance-search/advance-search.module').then((m)=>m.AdvanceSearchModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
