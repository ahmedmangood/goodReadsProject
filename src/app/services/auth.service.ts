import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

    loggedIn = false;
    token = localStorage.getItem('token') ? this.loggedIn = true : false;

}
