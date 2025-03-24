import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import {  Router,  } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedUser = signal<User>({ username: '', password: '' });
  #loggedIn = signal(false);
  isLoggedIn = this.#loggedIn.asReadonly();
  notAuthorized = signal(false);


  login({ username, password }: User) {
    this.signedUser.set({ username, password });
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { username: this.signedUser().username, password: this.signedUser().password }
      )
    })
    .then(response => {
      if (!response.ok) {
        this.notAuthorized.set(true);
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      this.#loggedIn.set(true);
      this.notAuthorized.set(false);
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  logout() {
    this.#loggedIn.set(false);
    this.router.navigate(['/login']);
  }
  constructor(private router: Router) { }
}
