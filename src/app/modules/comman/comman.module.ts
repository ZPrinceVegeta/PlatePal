import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

const material=[
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule
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
