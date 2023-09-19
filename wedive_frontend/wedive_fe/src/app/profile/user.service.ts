import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  GETUSER_API: string = environment.GETBYUSERNAME;

  constructor(private http: HttpClient) { }

  getUser(username: string | null){
   return this.http.get(this.GETUSER_API + username);
  }
}
