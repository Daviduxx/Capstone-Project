import { PasswordModule } from 'primeng/password';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    console.log(this.user.password);
  }

  changeSettings(){
    this.uSvc.editUser(this.settings.value, this.user.id).subscribe((resp) => {
      console.log(resp);

    })
  }


}
