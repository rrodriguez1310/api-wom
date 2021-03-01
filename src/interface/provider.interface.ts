import { Document } from "mongoose";

export interface IProvider extends Document {
    _id: string;
    nombre: string;
    descripcion: string;
    imagen?: string;
    estado?: boolean;

}