import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Interfaces/product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<ProductDetailsComponent>,
    private cartService: CartService
  ) { }

  // Función para agregar el producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // Cierra la ventana modal cuando se hace clic en el fondo oscurecido
  @HostListener('click', ['$event'])
  closeOnClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.dialogRef.close();
    }
  }
}
