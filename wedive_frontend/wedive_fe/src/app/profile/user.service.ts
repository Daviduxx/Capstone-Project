import { iDives } from './../interfaces/i-dive';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { iUser } from '../interfaces/iuser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // andpoints & props

  GETUSER_API: string = environment.GETBYUSERNAME;
  ADDDIVE_API: string = environment.ADDDIVE;
  GETDIVE_API: string = environment.GETDIVEBYID;
  DELETEDIVE_API: string = environment.DELETEDIVE;

  user!: iUser;
  dive!: iDives;

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  // sets user's data on localstorage
  setUserData(user:iUser):void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  // probably dead code
  getUserData(): Observable<iUser>{
    return of(this.user);
  }

  getDive(id:number){
    return this.http.get<iDives>(this.GETDIVE_API + id);
  }

  deleteDive(id:number){
    return this.http.delete(this.DELETEDIVE_API + id);
  }

  // find the user from the username
  getUser(username: string | null) {

    let json = localStorage.getItem('userLogin');
    if(json) {
      let userLogin = JSON.parse(json);
      this.headers = this.headers.set('Authorization', 'Bearer ' + userLogin.accessToken);
    }
   return this.http.get<iUser>(this.GETUSER_API + username, { headers: this.headers });
  }

  // add dive entity, based on the user's id
  addDive(dive:iDives, id:number){
    return this.http.post<iDives>(this.ADDDIVE_API + id, dive);
  }
}
