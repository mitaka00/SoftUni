import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptors';
import { ErrorInterceptors } from './interceptors/error.interceptors';


import { AuthModule } from './authentication/auth.module';
import { FurnitureModule } from './furniture/furniture.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    FurnitureModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptors,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
