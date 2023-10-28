import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../Interfaces/product';
import { ProductosService } from '../Services/productos.service';
import { CartService } from '../Services/cart.service'; // Importa el servicio de carrito
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['title', 'price', 'category', 'image', 'rate', 'count', 'acciones'];
  dataSource = new MatTableDataSource<Product>();

  constructor(private productoServicio: ProductosService, private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openProductDetails(product: Product) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '500px',
      data: product
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProducts() {
    this.productoServicio.getProductos().subscribe({
      next: (dataResponse) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },
      error: (e) => { }
    });
  }

  // Función para agregar un producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
