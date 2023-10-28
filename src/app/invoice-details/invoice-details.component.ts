import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/Interfaces/product';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css', '../cart/cart.component.css']
})
export class InvoiceDetailsComponent {
  invoiceItems: Product[] = [];
  invoiceNumber: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product[]) {
    this.invoiceItems = data;
    this.invoiceNumber = Math.floor(1000 + Math.random() * 9000); // Número de factura aleatorio
  }
}
