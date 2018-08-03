import {Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/loginModel';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/registerModel';

const appKey = "kid_ryXvgzkrX";
const appSecret = "9f6e7b873d7f4dc38334fbcceb887478";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService{

    private currentAuthtoken:string='';

    constructor(private http:HttpClient){}

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

    login(loginModel:LoginModel){
        return this.http.post(loginUrl,
        loginModel,
        {
            headers:this.createAuthHeaders('Basic')
        })
    }

    register(registerModel:RegisterModel){
        return this.http.post(registerUrl,
        registerModel,
        {
            headers:this.createAuthHeaders('Basic')
        })
    }

    logout(){
        return this.http.post(logoutUrl,
        {},
        {
            headers:this.createAuthHeaders('Kinvey')
        })
    }

    checkIfLoggedIn(){
        return this.currentAuthtoken==localStorage.getItem('authtoken');
    }

    get authtoken(){
        return this.currentAuthtoken;
    }

    set authtoken(value:string){
        this.currentAuthtoken=value;
    }
}