import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit{

  constructor ( private route: Router, private aSvc: AuthService ) { }

  items: MenuItem[] | undefined;
  loggedItems!: MenuItem[]
  isLoggedIn: boolean = false;

  ngOnInit() {

this.isLoggedIn = this.aSvc.isLoggedIn;
console.log(this.isLoggedIn);

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

    this.loggedItems = [
      {
        label: 'Logout',
        style: {
          'background-color': 'red',
          'border-radius': '10px'
        },
        command: () => this.logout()
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

logout(){
  this.aSvc.logout();
}
}

