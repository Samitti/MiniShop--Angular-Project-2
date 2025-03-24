import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [PrimaryButtonComponent, CommonModule, FormsModule],
  template: `
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>  

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" #f="ngForm" (ngSubmit)="onFormSubmit(f)" >
      <div>
        <label for="username" class="block text-sm/6 font-medium text-gray-900">User Name</label>
        <div class="mt-2">
          <input ngModel name="username" #username="ngModel" required type="text" autocomplete="username" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
        <span *ngIf="!username.valid && username.touched" class="text-red-500">
            Please enter a username
          </span>
      </div>

      @if(notAuthorized()){
          <div class="flex flex-col justify-center items-center text-red-500">
              <span >Incorrect Username or Password</span>
          </div>
        }

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
          </div>
        </div>
        <div class="mt-2">
          <input  ngModel
            name="password" type="password"  #password="ngModel"
            required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div> 
        <span *ngIf="!password.valid && password.touched" class="text-red-500">
            Please enter a password
          </span>
      </div>
      
      <app-primary-button class="" [label]="'Sign in '" /> 
    </form>
    <span *ngIf="isUserLoading() " class="text-red-500">
            Logging in...            
          </span>
    <div class="flex flex-col justify-center items-center mt-10 text-green-500">
      <span> Sample Username: johnd </span>
      <span> Sample Password: m38rmF$ </span>
    </div>    
  </div>
</div>
  `,
  styles: ``
})
export class LoginComponent {
  authService = inject(AuthService);
  notAuthorized = inject(AuthService).notAuthorized;
  isUserLoading = inject(AuthService).isUserLoading;

  onFormSubmit(f: NgForm) {
    this.isUserLoading.set(true);
    this.authService.login({ username: f.value.username, password: f.value.password });
  }
}
