import { Injectable } from '@angular/core';
import {User} from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 public login(user: User) {
      if ((user.email === 'test@abc.com') && (user.password === '123456')) {
		localStorage.setItem('ACCESS_TOKEN', 'abcd');
		user.firstName = 'Pranaya'
		user.lastName = 'Mishra'
		return user;
	  }
	  return null;
  }

  public isLoggedIn() {

   return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public update(Ob : Object){

  }

  public changePassword(Ob: Object) {

  }
  public register(Ob: Object) {
	  
  }
  constructor() { }
}
