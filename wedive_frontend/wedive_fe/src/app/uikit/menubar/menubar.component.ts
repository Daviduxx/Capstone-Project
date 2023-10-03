import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { AuthService } from 'src/app/auth/auth.service';
import { IUserjwt } from 'src/app/interfaces/i-userjwt';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit{

  constructor (
    private route: Router,
    private aSvc: AuthService,
    private msg: MessageService
    ) { }

  items: MenuItem[] | undefined;
  loggedItems!: MenuItem[]
  isLoggedIn: boolean = false;
  username!: string;

  ngOnInit() {

  this.aSvc.restoreUser();
  this.isLoggedIn = this.aSvc.isLoggedIn
  this.username = this.aSvc.username;
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
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        style: {
          'border-radius': '10px',
          'margin-right': '20px'
        },
        command: () => this.route.navigate(['/profile', this.username])
      },
      {
        label: 'Logout',
        style: {
          'background-color': 'red',
          'border-radius': '10px'
        },
        command: () => {
          // this.msg.add({ severity: 'success', summary: 'Success', detail: 'Logged out!' });
          this.logout()
        }
      }
  ];

    // Menubar animation
    window.addEventListener('scroll', () => {

      let scrolled = window.scrollY;
      let nav: any = document.querySelector('.p-menubar');
      if(scrolled > 200){
        nav.classList.add('scrolled')
        nav.classList.remove('removed')
      }
      else{
        nav.classList.add('removed')
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

