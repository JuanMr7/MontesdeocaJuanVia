import { FacturaDetalle } from './factura-detalle';

export interface Factura {
    id: number;
    fecha: Date;
    detalles: FacturaDetalle[];
    total: number;
}
