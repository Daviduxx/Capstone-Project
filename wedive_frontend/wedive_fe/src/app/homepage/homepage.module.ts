import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { UikitModule } from '../uikit/uikit.module';
import { MenubarComponent } from '../uikit/menubar/menubar.component';
import { FeaturesComponent } from './components/features/features.component';
import { FaqComponent } from './components/faq/faq.component';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    HomepageComponent,
    HerosectionComponent,
    FeaturesComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    UikitModule,
    AccordionModule
  ]
})
export class HomepageModule { }
