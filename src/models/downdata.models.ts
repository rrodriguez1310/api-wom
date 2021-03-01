import { Document, Model, model, Schema } from "mongoose";
import { IDowndata } from "../interface/downdata.interface"

const downdataSchema: Schema = new Schema({
    pasarela: {
    type: String,
    required: true,
    unique: false
  },
  estadoToken: {
    type: String,
    required: true,
    unique: false
  },
  material: {
    type: String,
    required: true,
    unique: false
  },
  dispositivos: {
    type: Number,
    required: true,
    unique: false
  },
  cid: {
    type: String,
    required: true,
    unique: false
  },
  fechaBaja: {
    type: Date,
    required: true,
    unique: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});
const Downdata: Model<IDowndata> = model("Downdata", downdataSchema);
export default Downdata;