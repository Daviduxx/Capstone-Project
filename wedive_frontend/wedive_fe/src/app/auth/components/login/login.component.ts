import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

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
          Validators.minLength(3)
      ])
      }
    );
  }

  onSubmit() {
    if(this.login.value.username !== null && this.login.value.password !== null) {
      this.aSvc.login(this.login.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          this.user = resp;
          localStorage.setItem('userLogin', JSON.stringify(resp));
          this.router.navigate(['/profilo', this.user.username])
        }, err => {
          console.log(err.error.message);
          this.error = err.error.message;
        })
      this.error = undefined;
  } else {
    this.error = 'Field Required';
  }
    }


}
