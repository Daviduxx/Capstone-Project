import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UikitModule } from "../uikit/uikit.module";
import { HeadingComponent } from './components/heading/heading.component';


@NgModule({
    declarations: [
        ProfileComponent,
        HeadingComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        UikitModule
    ]
})
export class ProfileModule { }
