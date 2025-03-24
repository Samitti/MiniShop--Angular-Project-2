import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent, RouterModule, CommonModule],
  template: `
    <div class="flex justify-between p-6 flex items-center shadow-md border rounded-xl gap-4">
          <div class="hover:cursor-pointer" routerLink="/product-detail/{{item().id}}">
            <img class="w-[100px] h-[100px] object-contain" [src]="item().image" alt="">
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-lg">{{item().title}}</span>
            <span class="text-md font-bold">{{item().price | currency:'CAD'}}</span>
          </div>
          <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" />
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  cartService = inject(CartService);
  item = input.required<Product>();
}
