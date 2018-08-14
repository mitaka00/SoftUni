import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators"
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser && currentUser.token){
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + currentUser.token,
                }
            })
        }

        return next.handle(request)
            .pipe(tap((response: HttpEvent<any>)=>{
               if(response instanceof HttpResponse && response.body.token) {
                    localStorage.setItem('currentUser', JSON.stringify({username: response.body.user.name, token: response.body.token}))
                    this.router.navigate(['furniture/create'])
               }
            }))

    }
}