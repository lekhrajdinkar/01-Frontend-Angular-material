import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService 
{
  private user: User; // hold user data for current user.
  authChange = new Subject<boolean>(); //event - component comm.

  //-----=================================================================ß===
  // Inject Router Servie for programatically navigate to appropriate pages.
  // like sign in page afer logout
  // And  traing page after succesful login.
  constructor(private router: Router) {}

  //------==================================================================== 
  // common method for sign up and  login --> 
  // it will event emit whenever auth status gets changed to true 
  // + navigate to training  page after successfull authentication.
   private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  //1. register user
  registerUser(authData: AuthData) {
    console.log(authData);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  //2. login
  login(authData: AuthData) {
    console.log(authData);
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  // 3. logout - user user to null and navigate programitaclly to login page.
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  //4. getuser
  getUser() {
    return { ...this.user }; // retturn new object immutably.
  }


  // 5. Check Authenticity, will be used by authGaurd.
  isAuth() {
    return this.user != null;
  }

 
}
