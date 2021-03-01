import { Document } from "mongoose";
export interface ISaveIp extends Document{
    _user: string;
    ip: string;
    count: number;
    created: Date;
}
