import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss']
})
export class HerosectionComponent {

  constructor ( private router: Router, private renderer: Renderer2) { }

  join(){
    this.router.navigate(['join/signup'])
  }

  scrollToElement(element:any):void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
