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
  quantities: number[] = [1, 2, 3, 4, 5]; // Define las cantidades disponibles
  selectedQuantity: number = 1; // Inicializa la cantidad seleccionada en 1

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private dialogRef: MatDialogRef<ProductDetailsComponent>,
    private cartService: CartService
  ) { }

  // Función para agregar el producto al carrito
  addToCart(product: Product, quantity: number) {
    const productWithQuantity = { ...product, quantity: this.selectedQuantity };
    // Agrega el producto con la cantidad al carrito
    this.cartService.addToCart(productWithQuantity);
    this.dialogRef.close();
  }

  // Cierra la ventana modal cuando se hace clic en el fondo oscurecido
  @HostListener('click', ['$event'])
  closeOnClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.dialogRef.close();
    }
  }
}
