import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnboardComponent } from './onboard/onboard.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'onboard',
    component:OnboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
