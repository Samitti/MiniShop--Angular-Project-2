import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `   
    
    <div class="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }      
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([]);
  storeService = inject(StoreService);

  async ngOnInit() {
    const data = await this.storeService.getProducts();    
    this.products.set(data);
  }

}