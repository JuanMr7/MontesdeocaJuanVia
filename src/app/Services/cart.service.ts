import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }
}
