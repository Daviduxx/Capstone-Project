import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { iUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

 constructor( private uSvc: UserService, private route: ActivatedRoute) { }

username: string | null = null;
user: iUser | null = null;

  // same as profile.ts. probably mus be changed in the add.ts way
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username)
    this.uSvc.getUser(this.username).subscribe(
      resp => {
        console.log(resp);
        this.user = resp;
      }
    )
  }



}
