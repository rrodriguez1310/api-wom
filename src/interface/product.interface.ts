import { Document } from "mongoose";

export interface IProduct extends Document {
    _id: string;
    producto: string;
    material: string;
    descripcion: string;
    tipo: Date;
    estado: boolean;
    proveedor: string;
    dispositivos: number;
    code: string;
}