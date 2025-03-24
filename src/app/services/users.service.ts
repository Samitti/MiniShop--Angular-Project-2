import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = signal<[]>([]);
  
    async getUsers() {
      const res = await fetch('https://fakestoreapi.com/users');
      const data = await res.json();
      this.users.set(data);
      return this.users();
    }

  constructor() { }
}
