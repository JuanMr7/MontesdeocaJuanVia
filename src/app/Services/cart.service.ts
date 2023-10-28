import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Interfaces/product';
import { Factura } from '../Interfaces/factura';
import { FacturaDetalle } from '../Interfaces/factura-detalle';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private facturaSubject = new BehaviorSubject<Factura | null>(null);


  constructor() { }

  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza su cantidad.
      existingProduct.quantity = (existingProduct.quantity || 1) + (product.quantity || 1);
    } else {
      // Si no, establece la cantidad y agrega el producto al carrito.
      product.quantity = product.quantity || 1;
      this.cart.push(product);
    }

    this.cartSubject.next(this.cart);
  }

  removeFromCart(item: Product) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
    }
  }

  generateInvoice() {
    const detalles: FacturaDetalle[] = this.cart.map(item => ({
      producto: item,
      cantidad: item.quantity, // Asume que cada producto tiene una propiedad de cantidad
      precio: item.price,
      subtotal: item.quantity * item.price
    }));

    const total = detalles.reduce((acc, detalle) => acc + detalle.subtotal, 0);

    const factura: Factura = {
      id: Math.floor(Math.random() * 1000), // Genera un número de factura aleatorio
      fecha: new Date(),
      detalles,
      total
    };

    this.facturaSubject.next(factura);
    this.cart = []; // Limpia el carrito
    this.cartSubject.next(this.cart);
  }
  clearCart() {
    this.cart = []; // Vacía el arreglo del carrito
    this.cartSubject.next(this.cart); // Notifica a los observadores que el carrito está vacío
  }

}
