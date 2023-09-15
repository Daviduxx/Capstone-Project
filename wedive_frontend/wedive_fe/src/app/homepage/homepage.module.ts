import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { UikitModule } from '../uikit/uikit.module';
import { MenubarComponent } from '../uikit/menubar/menubar.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HerosectionComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    UikitModule
  ]
})
export class HomepageModule { }
