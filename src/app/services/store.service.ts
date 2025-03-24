import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store = signal<Product[]>([]);

  async getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.store.set(data);
    return this.store();
  }

  async addProduct(product: Product) {
    const res = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    const data = await res.json();
    console.log(data);
    this.store.set([...this.store(), data]);
    // console.log(this.store()[this.store().length - 1]);
    return this.store();

  }
}
