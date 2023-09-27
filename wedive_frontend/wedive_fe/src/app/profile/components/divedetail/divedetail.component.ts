import { Component, OnInit } from '@angular/core';
import { iDives } from 'src/app/interfaces/i-dive';
import { UserService } from '../../user.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-divedetail',
  templateUrl: './divedetail.component.html',
  styleUrls: ['./divedetail.component.scss']
})
export class DivedetailComponent implements OnInit {

  constructor (
    private uSvc: UserService,
    public config: DynamicDialogConfig
    ) {}

  id!: number;
  dive!:iDives

  ngOnInit(): void {
    this.id = this.config.data.id;
    this.uSvc.getDive(this.id).subscribe((resp) => {
      this.dive = resp;
    })
  }




}
