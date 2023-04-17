import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

const material=[
  MatIconModule,
  MatSidenavModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule,
    material
  ],
  exports: [
    material,
    HeaderComponent]
})
export class CommanModuleModule { }
