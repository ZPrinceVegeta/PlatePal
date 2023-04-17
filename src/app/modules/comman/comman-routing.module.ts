import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HeaderComponent,
children:[
  {
    path: '',
    loadChildren: () =>
      import('../landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanRoutingModule { }
