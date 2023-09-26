import { Component, OnInit } from '@angular/core';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { iDives } from 'src/app/interfaces/i-dive';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss']
})
export class RecentsComponent implements OnInit{

  constructor ( private uSvc: UserService, private route: ActivatedRoute) {}

  dives: iDives[] = [];
  username: any;

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

  diveDetail(d:iDives){
    console.log(d);

  }

}
