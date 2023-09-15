import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  exports: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class UikitModule { }
