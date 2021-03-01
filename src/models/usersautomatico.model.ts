import { Document, Model, model, Schema } from "mongoose";
import { IUserAutomatic } from "../interface/userAutomatic.interface";

const userSchema: Schema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  cabecera: {
    type: Object,
    required: true
  },
  jwt: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Usersautomatico: Model<IUserAutomatic> = model("Usersautomatico", userSchema);

export default Usersautomatico;