import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
   LoginComponent,
   RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule {  }