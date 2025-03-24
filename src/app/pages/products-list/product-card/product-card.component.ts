import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, RouterModule, CommonModule],
  template: `
    <div class="card bg-white shadow-md rounded-lg p-4 m-2 " >
          <img class="w-full h-[100] object-contain hover:cursor-pointer " routerLink="/product-detail/{{product().id}}"[src]="product().image" alt="">
          <div class="flex justify-between">
            <h3 class=" text-lg">{{product().title}}</h3>
          </div>
          <p class="text-sm p-2 font-bold"> {{product().price | currency:'CAD'}}</p>

          <p class="text-sm text-gray-500 mb-2">Category: {{product().category}}</p>
          
          <app-primary-button  label="Add to Cart"  (btnClicked)="cartService.addToCart(product())" />
        </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
  
}
