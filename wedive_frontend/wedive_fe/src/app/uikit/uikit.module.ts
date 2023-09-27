import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { Footer } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    MenubarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  exports: [
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ]
})
export class UikitModule { }
