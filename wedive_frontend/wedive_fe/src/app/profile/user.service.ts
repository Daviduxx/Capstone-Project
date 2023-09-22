import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { iUser } from '../interfaces/iuser';
import { iDives } from '../interfaces/i-dive';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  GETUSER_API: string = environment.GETBYUSERNAME;
  ADDDIVE_API: string = environment.ADDDIVE;

  user!: iUser;

  constructor(private http: HttpClient) { }

  setUserData(user:iUser):void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  // probably dead code
  getUserData(): Observable<iUser>{
    return of(this.user);
  }

  getUser(username: string | null) {
   return this.http.get<iUser>(this.GETUSER_API + username);
  }

  addDive(dive:iDives, id:number){
    return this.http.post<iDives>(this.ADDDIVE_API + id, dive);
  }
}
