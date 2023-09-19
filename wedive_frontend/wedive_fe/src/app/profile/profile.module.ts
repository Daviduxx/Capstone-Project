import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BannerComponent } from './components/banner/banner.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    ProfileComponent,
    BannerComponent

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AvatarGroupModule,
    AvatarModule,
    ImageModule
  ]
})
export class ProfileModule { }
