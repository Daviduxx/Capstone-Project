import { KnobModule } from 'primeng/knob';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { UikitModule } from "../uikit/uikit.module";
import { AnimateModule } from 'primeng/animate';
import { DivedetailComponent } from './components/divedetail/divedetail.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
    declarations: [
        ProfileComponent,
        BannerComponent,
        RecentsComponent,
        AddComponent,
        DivedetailComponent,
        SettingsComponent,
    ],
    providers: [
        DatePipe,
        DialogService,
        MessageService,
        ConfirmationService
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
        InputTextareaModule,
        InputTextModule,
        CalendarModule,
        DatePipe,
        UikitModule,
        AnimateModule,
        KnobModule,
        DynamicDialogModule,
        ToastModule,
        ConfirmDialogModule

    ]
})
export class ProfileModule { }
