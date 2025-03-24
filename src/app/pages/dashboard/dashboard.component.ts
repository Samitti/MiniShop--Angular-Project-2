import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <div >   
        <h1 class="text-3xl font-bold text-center">List of Users</h1>
        <div class="flex flex-col justify-center align-center card bg-white shadow-md rounded-lg p-4 m-10 mt-5 " >
            @for(user of users(); track user.id) {
              <div class="bg-slate-100  flex flex-col  shadow-md rounded-xl p-2 m-2">
                <div>
                  <span>ID: {{user.id}}</span>
                </div>
                <div class="flex flex-col justify-center align-center card bg-white shadow-md rounded-lg p-4 m-5  ">
                  <div>username: {{user.username}}</div>
                  <div>password: {{user.password}}</div>
                  <div>email: {{user.email}}</div>
                </div>
              </div>
            }
      </div>
  `,
  styles: ``
})
export class DashboardComponent {
  users = signal<{ id: number,  email: string, username: string, password: string }[]>([]);
    usersService = inject(UsersService);
  
    async ngOnInit() {
      const data = await this.usersService.getUsers();    
      this.users.set(data);
      // console.log(this.users());
    }
  
  
}
