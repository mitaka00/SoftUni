import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:LoginModel;
  loginFailed:boolean;
  errorMessage:string;

  constructor(private router:Router,private authService:AuthService) {
    this.model=new LoginModel('','')
   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(
      data=>{
        this.successfulLogin(data)
      },
      err=>{
        this.loginFailed=true;
        this.errorMessage=err['error']['description'];
      }
    )
  }

  successfulLogin(data){
    this.authService.authtoken=data['_kmd']['authtoken'];
    localStorage.setItem('authtoken',data['_kmd']['authtoken'])
    localStorage.setItem('username',data['username'])
    console.log('login')
    this.router.navigate(['/home'])
  }

}
