import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const appKey = "kid_rJv4MMxU7";
const appSecret = "4fba5e8792bb428d8212af13c9a920bd";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string;
  role: string;
  username: string;

  constructor(
    private toastr : ToastrService,
    private router : Router,
    private http:HttpClient
  ) { }

  private createAuthHeaders(type:string):HttpHeaders{
    if(type==='Basic'){
        return new HttpHeaders({
            'Authorization':`Basic ${btoa(`${appKey}:${appSecret}`)}`,
            'Content-Type':'Application/json'
        })
    } else{
        return new HttpHeaders({
            'Authorization':`Kinvey ${localStorage.getItem('authtoken')}`,
            'Content-Type':'Application/json'
        })
    }
}

  register(username,password,repeatPassword){
    if(password!=repeatPassword){
      this.toastr.error("Passwords don't match", 'Warning');
      return;
    }
    return this.http.post(registerUrl,
     {username,password,role:'user'},
      {
          headers:this.createAuthHeaders('Basic')
      }).subscribe((data)=>{
        this.toastr.success('Signed Up', 'Success');
        this.router.navigate(['/auth/login']);
      },err=>{
        this.toastr.error(err.error.description, 'Warning');
      })
  }

  login(username,password){
    return this.http.post(loginUrl,
      {username,password},
      {
          headers:this.createAuthHeaders('Basic')
      }).subscribe((data)=>{
        console.log(data)
        this.token=data['_kmd']['authtoken'];
        this.role=data['role'];
        this.username=data['username']
        localStorage.setItem('authtoken',this.token)
        localStorage.setItem('username',data['username'])
        this.toastr.success('Signed In', 'Success');
        this.router.navigate(['/cars/list']);
      },err=>{
        this.toastr.error(err.error.description, 'Warning');
      })
  }

  logout(){
   return this.http.post(logoutUrl,
    {},
    {
        headers:this.createAuthHeaders('Kinvey')
    }).subscribe((data)=>{
      this.toastr.success('Logout', 'Success');
      this.router.navigate(['/auth/login']);
      this.token = null;
      this.username=null;
      this.role=null;
      localStorage.clear();
    })
  }

  getToken(){
    return this.token;
  }

  isAuthenticated() : boolean {
    return this.token != null;
  }

  isAdmin():boolean{
    return this.role==='admin'
  }
}