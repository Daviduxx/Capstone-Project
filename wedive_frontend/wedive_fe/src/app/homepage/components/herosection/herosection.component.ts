import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from 'src/app/auth/auth.service';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss']
})
export class HerosectionComponent{

  constructor (
    private router: Router,
    private renderer: Renderer2,
    private msg: MessageService,
    private aSvc: AuthService
    ) {  }



  join(){
    this.router.navigate(['join/signup'])
  }

  scrollToElement(element:any):void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  // dead code for now but coming soon
  show() {
    this.msg.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
