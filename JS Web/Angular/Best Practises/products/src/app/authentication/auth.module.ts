import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
     SigninComponent,
     SignupComponent
    ],
    imports: [
     FormsModule
    ],
    providers: [ 
      AuthService
    ]
      
  })
  export class AuthModule { }