import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  signup!: FormGroup;

constructor() {}

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
    birth: new FormControl(null),
    password: new FormControl(null)
    }
  );
}


onSubmit() {

   console.log(this.signup)
}

}
