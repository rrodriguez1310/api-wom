import { Document } from "mongoose";
export interface IUpdata extends Document {
    _id: string;
    pasarela: string;
    estadoToken: string;
    material: string;
    dispositivos: number;
    cid: string;
    fechaAlta: Date;
}


