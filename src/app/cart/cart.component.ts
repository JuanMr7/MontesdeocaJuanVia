import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../Interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
}
