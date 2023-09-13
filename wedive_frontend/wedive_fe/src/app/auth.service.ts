import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ISignup } from './interfaces/i-signup';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SIGNUP_API: string = environment.SIGNUP;

  constructor(private http: HttpClient) { }

  signup(user: ISignup){
    console.log(user);
    return this.http.post(this.SIGNUP_API, user);
  }
}
