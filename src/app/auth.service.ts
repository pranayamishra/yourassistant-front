import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(userInfo: User) {
      if ((userInfo.email === 'test@abc.com') && (userInfo.password === '123456')) {
        localStorage.setItem('ACCESS_TOKEN', 'abcd');
      }
  }

  public isLoggedIn() {

   return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  constructor() { }
}
