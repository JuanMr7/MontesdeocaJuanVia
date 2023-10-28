import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // <-- importa LoginComponent
import { ProductsComponent } from './products/products.component'; // <-- importa ProductsComponent
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // <-- Agrega la ruta
  { path: 'products', component: ProductsComponent }, // <-- Agrega la ruta
  { path: 'cart', component: CartComponent }, // <-- Agrega la ruta
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // <-- Redirecciona a /login
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // <-- Redirecciona a /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
