import { Document } from "mongoose";

export interface IUser extends Document {
    _id: string;
    pasarela: string;
    estado: boolean;
    estadoToken: string;
    material: string;
    dispositivos: number;
    cid: number;
    email: String;
    nombre: string;
    apellidos: string;
    fechaNacimiento: Date;
    genero: String;
    tipo: String;
    telefono: Number;
    equipo: String;
    pais: String;
    rut: String;
    datosPersonales: Boolean;
}
