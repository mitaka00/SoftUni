import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

import { tap, catchError } from "rxjs/operators"
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorInterceptors implements HttpInterceptor {
    constructor(private toastr: ToastrService){
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError((err: HttpErrorResponse)=>{
                switch(err.status){
                    case 400: this.toastr.error(err.error.message,'Error!')
                        break;
                    case 401: this.toastr.error(err.error.message,'Error!')
                        break;

                }
                console.log(err)
                throw throwError(err)
                   
            }))
    }
}