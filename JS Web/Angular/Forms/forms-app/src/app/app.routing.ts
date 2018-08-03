import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes:Routes=[
    {path:'',pathMatch:'full', redirectTo:'home'},
    {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}