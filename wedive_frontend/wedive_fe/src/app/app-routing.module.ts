import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from './auth/guard/guard.guard';


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
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
