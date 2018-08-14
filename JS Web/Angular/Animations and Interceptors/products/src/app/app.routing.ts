import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FurnitureCreateComponent } from './furniture/furniture-create/furniture-create.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { FurnitureMineComponent } from './furniture/furniture-mine/furniture-mine.component';

const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture', canActivate: [AuthGuard], children:[
    {path: 'create', component: FurnitureCreateComponent},
    {path: 'all', component: FurnitureAllComponent},
    {path: 'mine', component: FurnitureMineComponent}
    
  ]},
  {path: 'details/:id',component: FurnitureDetailsComponent},
 
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }