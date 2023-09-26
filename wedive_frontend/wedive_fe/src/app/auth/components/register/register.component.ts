import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup!: FormGroup;
  error: undefined | string;

constructor( private aSvc: AuthService, private route: Router ) {}

ngOnInit(): void {

  this.signup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    surname: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]
      ),
    username: new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
    email: new FormControl(null,
      [
        Validators.required,
       Validators.email,
       Validators.pattern("^[a-z0-9.]{3,20}@[a-z]{2,7}\\.[a-z]{2,5}$")
      ]
      ),
    birthday: new FormControl(null),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]
      )
    }
  );
}

onSubmit() {
  if(this.signup.value.name !== null
    && this.signup.value.surname !== null
    && this.signup.value.username !== null
    && this.signup.value.email !== null
    && this.signup.value.birthday !== null
    && this.signup.value.password !== null
    ) {
      this.aSvc.signup(this.signup.value).subscribe(
        res => {
          console.log(res);
          this.error = undefined;
        },
        err => {
          console.log(err.error.message);
          this.error = err.error.message;
        }
          );
        }
        else {
          this.error = "Field required!"
          console.error(this.error);
        }
    }

    backToHome(){
      this.route.navigate(['/homepage'])
    }

}
