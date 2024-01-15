import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from './auth/guard/guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './uikit/notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'join',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
