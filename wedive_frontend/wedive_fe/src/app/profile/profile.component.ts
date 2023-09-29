import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { iUser } from '../interfaces/iuser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    private uSvc: UserService,
    private route: ActivatedRoute,
    private msg: MessageService
    ) { }

 username: string | null = null;
 user!: iUser;

 //find user's usernmae, and retrive user's object from it, then save it on the localstorage
  ngOnInit(): void {
    // this.show()
    this.username = this.route.snapshot.params['username'];
    this.uSvc.getUser(this.username).subscribe(
      resp => {
        this.user = resp;
        this.uSvc.setUserData(this.user)
      }
    )
  }

//   show() {
//     console.log('logged');

//     this.msg.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
// }

}
