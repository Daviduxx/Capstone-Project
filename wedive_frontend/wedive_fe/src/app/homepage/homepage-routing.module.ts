import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { FeaturesComponent } from './components/features/features.component';

const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'features', component: FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
