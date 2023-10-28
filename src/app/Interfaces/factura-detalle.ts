import { Product } from './product';

export interface FacturaDetalle {
    producto: Product;
    cantidad: number;
    precio: number;
    subtotal: number;
}
