import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor( private aSvc: AuthService) {}

  login!: FormGroup;

  ngOnInit(): void {

    this.login = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
      }
    );
  }

  onSubmit() {
      this.aSvc.login(this.login.value).subscribe(
        res => console.log(res)
      )
    }

}
