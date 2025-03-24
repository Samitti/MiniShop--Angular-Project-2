import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; // Ensure this path is correct
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/auth.guards';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full',
        component: ProductsListComponent 
    },
    { 
        path: 'cart', 
        component: CartComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'login/dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login/add-product',
        component: AddProductComponent,
        canActivate: [authGuard]
    },
    { 
        path: 'product-detail/:id',
        component: ProductDetailComponent 
    },
    {
        path: '**',
        component: NotFoundComponent,
      },
];
