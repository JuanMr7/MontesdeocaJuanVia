import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "products/";

  constructor(private http:HttpClient) { }

  getProductos():Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
