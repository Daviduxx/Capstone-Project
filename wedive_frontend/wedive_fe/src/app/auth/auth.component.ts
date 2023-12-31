import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  constructor( private aSvc: AuthService, private router: Router) {}

  login!: FormGroup;
  error: undefined | string;
  user: any;

  ngOnInit(): void {

    this.login = new FormGroup({
      username: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ]
        ),
      password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
      ])
      }
    );
  }

  onSubmit() {
    if(this.login.value.username !== null && this.login.value.password !== null) {
      this.aSvc.login(this.login.value).subscribe(
        resp => {
          localStorage.setItem('userLogin', JSON.stringify(resp));
          this.error = undefined;
          this.user = resp;
          this.router.navigate(['/profile', this.user.username])
        }, err => {
          console.log(err.error.message);
          this.error = err.error.message;
        })
      this.error = undefined;
  } else {
    this.error = 'Field Required';
  }
    }

    backToHome(){
      this.router.navigate(['/homepage'])
    }


}
