import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  signup!: FormGroup;

constructor( private aSvc: AuthService ) {}

ngOnInit(): void {

  this.signup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    surname: new FormControl(null),
    username: new FormControl(null),
    email: new FormControl(null),
    birthday: new FormControl(null),
    password: new FormControl(null)
    }
  );
}


onSubmit() {

   console.log(this.signup);
  this.aSvc.signup(this.signup.value).subscribe(
    res => console.log(res),
    err => console.log(err)

  )
}

}
