import { PasswordModule } from 'primeng/password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { iUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

  settings!: FormGroup;
  maxDate: Date = new Date();
  error: string | undefined;
  user!: any;

  ngOnInit(): void {

    // retrieve data from localstorage
    let item: iUser | null | string = localStorage.getItem('user');
    if(item){
      item = JSON.parse(item);
      this.user = item;
    }

    this.settings = new FormGroup({
      name: new FormControl(this.user.name),
      surname: new FormControl(this.user.surname),
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
      phoneNumber: new FormControl(this.user.phoneNumber),
      password: new FormControl(null),
      bannerImage: new FormControl(this.user.bannerImage),
      profileImage: new FormControl(this.user.profileImage)
    });
  }

  changeSettings(){

  }


}
