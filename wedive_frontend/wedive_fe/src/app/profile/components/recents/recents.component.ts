import { Component, OnDestroy, OnInit } from '@angular/core';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { iDives } from 'src/app/interfaces/i-dive';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
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
    public dialogService: DialogService,
    private confirmationService: ConfirmationService
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
        header: 'Selected Dive',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });
}

ngOnDestroy() {
  if (this.ref) {
      this.ref.close();
  }
}

deleteDive(id:number){
  this.uSvc.deleteDive(id).subscribe(() => {
    console.log('Dive Deleted');

  })
}

 confirm2(id:number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this dive? If you confirm your dive will be lost FOREVER!',
            header: 'Danger Zone!',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              this.deleteDive(id);
                this.messageService.add({ severity: 'primary', summary: 'Confirmed', detail: 'Dive deleted' });
            },
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.clear();
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                }
            }
        });
    }


}
