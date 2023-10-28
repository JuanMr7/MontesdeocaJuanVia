import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../Interfaces/product';
import { ProductosService } from '../Services/productos.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['title', 'price', 'description', 'category', 'image', 'rate', 'count'];
  
  dataSource = new MatTableDataSource<Product>();

  constructor(private _productoServicio:ProductosService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProducts(){
    this._productoServicio.getProductos().subscribe({
      next: (dataResponse) => {
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      }, error: (e) => { }
    })
  }
}
