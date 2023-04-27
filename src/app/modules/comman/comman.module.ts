import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeypipePipe } from './pipe/keypipe.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';



const material=[
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
  MatCheckboxModule,
]
@NgModule({
  declarations: [
    HeaderComponent,
    KeypipePipe
  ],
  imports: [
    CommonModule,
    CommanRoutingModule,
    material
  ],
  exports: [
    material,
    HeaderComponent,
    KeypipePipe

  ]
})
export class CommanModuleModule { }
