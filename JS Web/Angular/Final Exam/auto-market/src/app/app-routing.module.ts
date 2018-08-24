import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CarModule } from './car/car.module';
import { AboutComponent } from './about/about.component';

const routes : Route[] = [
  { path: 'auth', children: [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ]  },
  { path: 'cars', 
   loadChildren: () => CarModule ,
  }, 
  { path: 'about', component: AboutComponent },
  {
    path: '**', redirectTo: '/cars/list'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }