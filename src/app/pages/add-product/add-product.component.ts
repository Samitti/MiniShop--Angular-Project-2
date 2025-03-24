import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-add-product',
  imports: [PrimaryButtonComponent, CommonModule, FormsModule],
  template: `
    <div>
      <h1 class="text-3xl font-bold text-center">Add Product</h1>
      <div class="flex flex-col justify-center align-center card bg-white shadow-md rounded-lg pb-20 " >
        <div class="flex min-h-full flex-col justify-center px-6  lg:px-8">
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" #f="ngForm" (ngSubmit)="onFormSubmit(f)">
              <div class="flex items-center">
                <label
                  for="title"
                  class="block text-sm/6 font-medium text-gray-900 mr-5"
                  >Title:
                </label>
                <div class="mt-2">
                  <input
                    ngModel
                    name="title"
                    type="text"
                    #title="ngModel"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <span *ngIf="!title.valid && title.touched" class="text-red-500 ml-2">Required</span>
                </div>
              </div>
              <div class="flex items-center">
                <label
                  for="price"
                  class="block text-sm/6 font-medium text-gray-900 mr-5"
                  >Price:
                </label>
                <div class="mt-2 flex ">
                  <input
                    ngModel
                    name="price"
                    type="currency"
                    #price="ngModel"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <span *ngIf="!price.valid && price.touched" class="text-red-500 ml-2">Required</span>
                </div>
              </div>
              <div class="items-center">
                <label
                  for="description"
                  class="block text-sm/6 font-medium text-gray-900 mr-5"
                  >Description:
                </label>
                <div class="mt-2">
                  <textarea
                    ngModel
                    name="description"
                    type="text"
                    rows="2" cols="50"
                    required
                    #description="ngModel"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                  <span *ngIf="!description.valid && description.touched" class="text-red-500 ml-2">Required</span>                  
                </div>
              </div>
              <div class="flex items-center">
                <label
                  for="category"
                  class="block text-sm/6 font-medium text-gray-900 mr-5"
                  >Category:
                </label>
                <div class="mt-2">
                  <input
                    ngModel
                    name="category"
                    type="text"
                    required
                    #category="ngModel"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <span *ngIf="!category.valid && category.touched" class="text-red-500 ml-2">Required</span>               
                  
                </div>
              </div>
              <div class="flex items-center">
                <label
                  for="image"
                  class="block text-sm/6 font-medium text-gray-900 mr-5"
                  >Image URL:
                </label>
                <div class="mt-2">
                  <input
                    ngModel
                    name="image"
                    type="text"
                    required
                    #image="ngModel"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  <span *ngIf="!image.valid && image.touched" class="text-red-500 ml-2">Required</span>                  
  
                </div>
              </div>
              <app-primary-button class="" [label]="'Submit '" />
            </form>      
            <span *ngIf="isLoading() " class="text-green-500">
            Adding Product ...
          </span>     
          <span *ngIf="!isLoading() && !isAddProductSuccess() " class="text-red-500">
            Adding Product Failed! Tryagain.
          </span>   
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AddProductComponent {
  storeService = inject(StoreService);
  isLoading = inject(StoreService).isLoading;
  addedProduct = signal<Product>( { id: 0, title: '', price: 0, description: '', category: '', image: '' });
  isAddProductSuccess = inject(StoreService).isAddProductSuccess;
  async onFormSubmit(f: NgForm) {
    // console.log(f.valid);
    if (!f.valid) {
      alert('Please fill all the fields');
      return;
    }
    this.isLoading.set(true);
    const data = await this.storeService.addProduct({
      id: Date.now(), // or any other logic to generate a unique id
      title: f.value.title,
      price: f.value.price,
      description: f.value.description,
      category: f.value.category,
      image: f.value.image
    });
    this.addedProduct.set(data[data.length - 1]);
    alert(`Product: ${this.addedProduct().title}, added successfully`);
    f.reset();
  }

  
  
}
