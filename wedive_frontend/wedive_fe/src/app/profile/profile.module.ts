import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BannerComponent } from './components/banner/banner.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ImageModule } from 'primeng/image';
import { RecentsComponent } from './components/recents/recents.component';
import { TagModule } from 'primeng/tag';
import { Button, ButtonModule } from 'primeng/button';
import { AddComponent } from './components/add/add.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ProfileComponent,
    BannerComponent,
    RecentsComponent,
    AddComponent

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AvatarGroupModule,
    AvatarModule,
    ImageModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    SelectButtonModule,
    KnobModule,
    InputTextareaModule,
    InputTextModule
  ]
})
export class ProfileModule { }
