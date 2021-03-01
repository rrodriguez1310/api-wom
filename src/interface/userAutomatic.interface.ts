import { Document, ObjectId } from "mongoose";

export interface IUserAutomatic extends Document {
    _id: string;
    _user: ObjectId;
    cabecera: object;
    jwt: string;
    fecha: Date;
}