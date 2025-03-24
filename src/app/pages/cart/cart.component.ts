import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="mt-15 p-6 flex flex-col gap-4 mx-auto  max-w-lg">
      <h2 class="text-2xl text-center  justify-center">Your Cart</h2>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />        
      }
      <app-order-summary />
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
