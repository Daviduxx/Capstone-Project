import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year!: number;

  constructor ( private route: ActivatedRoute, private router:Router ) {
    this.year = new Date().getFullYear();
  }

  scrollToElement(element:any):void {
    console.log(this.route.snapshot);
      if(this.route.snapshot.url.length == 0){
        (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
        else{
          this.router.navigate(['/homepage'])
        }
  }

}
