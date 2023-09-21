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

  constructor( private uSvc: UserService, private route: ActivatedRoute) { }

 username: string | null = null;
 user!: iUser;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username)
    this.uSvc.getUser(this.username).subscribe(
      resp => {
        console.log(resp);
        this.user = resp;
        this.uSvc.setUserData(this.user)
      }
    )
  }

}
