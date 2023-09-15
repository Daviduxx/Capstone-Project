import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { Footer } from 'primeng/api';



@NgModule({
  declarations: [
    MenubarComponent,
    FooterComponent
  ],
  exports: [
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class UikitModule { }
