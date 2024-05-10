import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'recipe',
        loadChildren: () => import('../recipes-page/recipes-page.module').then((m) => m.RecipesPageModule)
      },
      {
        path: 'compilation',
        loadChildren: () => import('../recipes-page/recipes-page.module').then((m) => m.RecipesPageModule)
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommanRoutingModule {}
