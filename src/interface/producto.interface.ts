import { Document } from "mongoose";

export interface IProducto extends Document {
    _id: string;
    producto: string;
    material: string;
    descripcion: string;
    tipo: string;
    estado: boolean;
    proveedor: string;
    dispositivos: number;
    code: string;
}