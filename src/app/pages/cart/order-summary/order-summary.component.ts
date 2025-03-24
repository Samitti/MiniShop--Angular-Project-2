import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent, CommonModule],
  template: `
    <div class="bg-slate-100 p-6 flex flex-col gap-4 shadow-md rounded-xl">
      <h2 class="text-2xl text-center justify-center">Order Summary</h2>
      <div class="flex justify-evenly">
        <span class="text-lg mr-2">Total  </span>
        <span class="text-lg mr-2">----------------  </span>
        <span class="text-lg font-bold"> {{total() | currency:'CAD'}}</span>
    </div>
    <app-primary-button label="Proceed to Checkout"  />
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (let item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}
