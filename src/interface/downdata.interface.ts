import { Document } from "mongoose";
export interface IDowndata extends Document {
    _id: string;
    pasarela: string;
    estadoToken: string;
    material: string;
    dispositivos: number;
    cid: string;
    fechaBaja: Date;
}
