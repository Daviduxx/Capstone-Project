import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ISignup } from '../interfaces/i-signup';
import { ILogin } from '../interfaces/i-login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  SIGNUP_API: string = environment.SIGNUP;
  LOGIN_API: string = environment.LOGIN;

  constructor(private http: HttpClient, private router: Router ) { }

  signup(user: ISignup){
    console.log(user);
    return this.http.post(this.SIGNUP_API, user);
  }

  login(user: ILogin){
    console.log(user);
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
    return this.http.post(this.LOGIN_API, user);
  }

  isAuth(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 1000)
    })
  }

  logout(){
    localStorage.removeItem('userLogin');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['../../'])
  }
}
