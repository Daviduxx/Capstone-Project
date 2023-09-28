import { PasswordModule } from 'primeng/password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

  constructor ( private uSvc:UserService ) {}

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
    console.log(this.user.password);

    this.settings = new FormGroup({
      name: new FormControl(this.user.name),
      surname: new FormControl(this.user.surname),
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
      phoneNumber: new FormControl(this.user.phoneNumber),
      bannerImage: new FormControl(this.user.bannerImage),
      profileImage: new FormControl(this.user.profileImage)
    });
    console.log(this.user.password);
  }

  changeSettings(){
    // for (const controlName in this.settings.controls) {
    //   if (this.settings.controls.hasOwnProperty(controlName)) {
    //     const formControl = this.settings.get(controlName);
    //     if (formControl) {
    //       this.user[controlName] = formControl.value;
    //     }
    //   }
    // }
    this.uSvc.editUser(this.settings.value, this.user.id).subscribe((resp) => {
      console.log(resp);

    })
  }


}
