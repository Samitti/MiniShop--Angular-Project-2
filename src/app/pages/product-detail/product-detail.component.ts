import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [PrimaryButtonComponent, CommonModule],
  template: `
    <div class="flex justify-center align-center card bg-white shadow-md rounded-lg p-4 m-10 mt-5 " >
        <div class="p-5 flex-1" >
          <img class="w-full h-[150] object-contain" [src]="product?.image" alt="">
        </div>
        <div class="flex flex-2 flex-col gap-2 justify-center ml-5">
            <h3 class="font-bold text-lg">{{product?.title}}</h3>
            <p class="text-sm p-2 ">$ {{product?.description}}</p>
            <p class="text-sm p-2 font-bold">{{product?.price | currency:'CAD'}}</p>
            <p class="text-sm text-gray-500 mb-2">Category: {{product?.category}}</p> 
            <!-- <app-primary-button  label="Add to Cart"  (btnClicked)="cartService.addToCart(product?)" /> -->
        </div>                  
      </div>
  `,
  styles: ``
})
export class ProductDetailComponent {
  // cartService = inject(CartService);
  storeService = inject(StoreService);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id')!;  

  product = this.getProductById(Number(this.id));
  
  getProductById(id: number): Product | undefined {    ;
    return this.storeService.store().find((p) => p.id === id);
  }
}






