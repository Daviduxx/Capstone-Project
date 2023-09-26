import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit{

  constructor ( private route: Router) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Login',
            routerLink: '/join'
        },
        {
            label: 'Signup',
            routerLink: '/join/signup',
            style: {
              'background-color': '#3b82f6',
              'border-radius': '10px'
            }
        }
    ];

    window.addEventListener('scroll', () => {

      let scrolled = window.scrollY;
      let nav: any = document.querySelector('.p-menubar');
      if(scrolled > 300){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
    })
}

backToHome(){
  this.route.navigate(['/homepage'])
}
}

