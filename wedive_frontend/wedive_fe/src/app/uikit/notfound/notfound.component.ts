import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {

  constructor ( private router: Router) { }

  join(){
    this.router.navigate([''])
  }

}
