import { Component, OnDestroy, OnInit } from '@angular/core';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { iDives } from 'src/app/interfaces/i-dive';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DivedetailComponent } from '../divedetail/divedetail.component';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit, OnDestroy{

  constructor (
    private uSvc: UserService,
    private route: ActivatedRoute,
    public messageService: MessageService,
    public dialogService: DialogService
    ) {}

  dives: iDives[] = [];
  username: any;
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username)
    this.uSvc.getUser(this.username).subscribe(
      resp => {
        console.log(resp);

        this.dives = resp.dives;
      }
    )

  }

  show(id:number) {
    this.ref = this.dialogService.open(DivedetailComponent, {
        data: {
          id: id
        },
        header: 'Select a Product',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });

    // don't needed popup
    // this.ref.onClose.subscribe((product: Product) => {
    //     if (product) {
    //         this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    //     }
    // });

    // this.ref.onMaximize.subscribe((value) => {
    //     this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    // });
}

ngOnDestroy() {
  if (this.ref) {
      this.ref.close();
  }
}


}
