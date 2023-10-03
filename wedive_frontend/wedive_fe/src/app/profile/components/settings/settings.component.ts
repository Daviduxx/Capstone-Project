import { PasswordModule } from 'primeng/password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iUser } from 'src/app/interfaces/iuser';
import { UserService } from '../../user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{

  constructor ( private uSvc:UserService, private messageService: MessageService ) {}

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
      name: new FormControl(this.user.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
        ),
      surname: new FormControl(this.user.surname,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ]
        ),
      username: new FormControl(this.user.username,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]
        ),
      email: new FormControl(this.user.email,
        [
          Validators.required,
         Validators.email,
         Validators.pattern("^[a-z0-9.]{3,20}@[a-z]{2,7}\\.[a-z]{2,5}$")
        ]
        ),
      password: new FormControl(null),
      phoneNumber: new FormControl(this.user.phoneNumber),
      bannerImage: new FormControl(this.user.bannerImage),
      profileImage: new FormControl(this.user.profileImage)
    });
    console.log(this.user.bannerImage);

  }

  changeSettings(){
    if(
      // nullable false props can't be null
      this.settings.value.name &&
      this.settings.value.surname &&
      this.settings.value.username &&
      this.settings.value.email
    ) {
      this.uSvc.editUser(this.settings.value, this.user.id).subscribe((resp) => {
        this.user = resp;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Profile settings changed!' });
        this.uSvc.setUserData(this.user)
      },
      (error) => {
        console.error('Error while change user settings:', error);
        this.error = error
      })
    } else {
      this.error = 'Something went wrong. Please make shure you have filled all the required inputs'
    }

  }


}
