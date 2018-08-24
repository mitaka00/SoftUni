import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  register(form : NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const repeatPasssword= form.value.repeatPassword;
    this.authService.register(username, password,repeatPasssword);
  }
}
