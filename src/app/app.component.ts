import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <div class="mt-20">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'mini-product-store';
}
