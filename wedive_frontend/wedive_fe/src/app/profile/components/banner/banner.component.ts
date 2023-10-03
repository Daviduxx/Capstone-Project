import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { iUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

 constructor( private uSvc: UserService, private route: ActivatedRoute, private router:Router ) { }

username: string | null = null;
user!: any;

  // same as profile.ts. probably mus be changed in the add.ts way
  ngOnInit(): void {
    this.uSvc.getUserData().subscribe((resp) => {
      this.user = resp;
    })
    this.username = this.route.snapshot.params['username'];
    this.uSvc.getUser(this.username).subscribe(
      resp => {
        this.user = resp;
      }
    )
    // let item: iUser | null | string = localStorage.getItem('user');
    // if(item){
    //   item = JSON.parse(item);
    //   this.user = item;
    //   console.log(this.user);

    // }
    // let bannerImg:any = document.querySelector('#bannerImg');
    // if(this.user){
    //   this.bannerImg = this.user.bannerImage
    // }
  }




}
