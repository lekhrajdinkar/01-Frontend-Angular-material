import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  //Register User.
  onSubmit(form: NgForm) 
  {
    console.log(form);
    this.authService.login(
      {
      email: form.value.email,
      password: form.value.password
      } //model - auth-data, has to be passed.
    );
  }
}
