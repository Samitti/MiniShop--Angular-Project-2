import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, RouterLinkActive],
  template: `
    <div class="fixed top-0 z-50 w-full bg-black text-white p-3 px-10 text-lg shadow-md flex justify-between items-center">
      <span class="font-bold italic text-2xl hover:cursor-pointer" routerLink="/">
        Mini-Store
      </span>

      <div class="flex">
        <ul class=" flex">
          <li class="mr-4">
            <a class="" routerLinkActive="text-amber-500 font-bold" routerLink="/" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          </li>
          @if(authService.isLoggedIn()){
            <li class="mr-4">
              <a class="" routerLinkActive="text-amber-500 font-bold"  routerLink="/login/add-product">Add Product</a>
            </li>
            <li class="mr-4">
              <a class="" routerLinkActive="text-amber-500 font-bold"  routerLink="/login/dashboard">Dashboard</a>
            </li>
          }               
        </ul>
        <app-primary-button [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
        />     
        @if(!authService.isLoggedIn()){
            <app-primary-button class="ml-2" [label]="'Login '"
            routerLink="/login"
            /> 
          }  
        @if(authService.isLoggedIn()){
            <app-primary-button class="ml-2" [label]="'Logout '"
            (btnClicked)="authService.logout()"            
            /> 
        }
      </div>      
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
}

