import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ISignup } from '../interfaces/i-signup';
import { ILogin } from '../interfaces/i-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SIGNUP_API: string = environment.SIGNUP;
  LOGIN_API: string = environment.LOGIN;

  constructor(private http: HttpClient) { }

  signup(user: ISignup){
    console.log(user);
    return this.http.post(this.SIGNUP_API, user);
  }

  login(user: ILogin){
    console.log(user);
    return this.http.post(this.LOGIN_API, user);
  }
}
