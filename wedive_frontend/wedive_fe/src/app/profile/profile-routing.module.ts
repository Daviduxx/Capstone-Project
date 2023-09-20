import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { RecentsComponent } from './components/recents/recents.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: '', component: RecentsComponent },
  { path: 'add', component: AddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
