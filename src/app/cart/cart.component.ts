//JuanMontesdeoca
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/Interfaces/product';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, public dialog: MatDialog) {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  ngOnInit() {
    this.calculateTotal();
  }

  removeItemFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  generateInvoice() {
    const dialogRef = this.dialog.open(InvoiceDetailsComponent, {
      data: this.cartItems.slice(), // Usar slice para crear una copia de la lista
      width: '500px',
    });
  
    this.cartService.clearCart();
    this.calculateTotal();
  }
  
}
