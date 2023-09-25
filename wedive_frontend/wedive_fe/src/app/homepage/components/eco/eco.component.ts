import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.scss']
})
export class EcoComponent {

  constructor ( private router: Router) { }

  join(){
    this.router.navigate(['join/signup'])
  }

}
