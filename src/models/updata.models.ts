import { Document, Model, model, Schema } from "mongoose";
import { IUpdata } from "../interface/updata.interface"

const updataSchema: Schema = new Schema({
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
  fechaAlta: {
    type: Date,
    required: true,
    unique: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});
const Updata: Model<IUpdata> = model("Updata", updataSchema);
export default Updata;