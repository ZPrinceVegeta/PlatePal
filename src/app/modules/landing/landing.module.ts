import {CommanModuleModule } from './../comman/comman.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomepageComponent } from './component/homepage/homepage.component';


@NgModule({
  declarations: [

    HomepageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CommanModuleModule

  ]
})
export class LandingModule { }
