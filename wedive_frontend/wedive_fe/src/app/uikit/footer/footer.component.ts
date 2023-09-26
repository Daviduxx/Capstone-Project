import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year!: number;

  constructor ( private route: ActivatedRoute ) {
    this.year = new Date().getFullYear();
  }

  scrollToElement(element:any):void {
    console.log(this.route.snapshot.url[0].path);
    if(this.route.snapshot.url[0].path != 'profile'){
      (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
