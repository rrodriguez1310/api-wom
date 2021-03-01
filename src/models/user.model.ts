import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "../interface/user.interface"

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true
  },
  nombre: {
    type: String,
    required: false,
    unique: false
  },
  apellidos: {
    type: String,
    required: false,
    unique: false
  },
  fechaNacimiento: {
    type: Date,
    required: false,
    unique: false
  },
  genero: {
    type: String,
    required: false,
    unique: false
  },
  cid: {
    type: String,
    required: true,
    unique: true
  },
  estado: {
    type: String,
    required: true,
    unique: true
  },
  tipo: {
    type: String,
    required: false,
    unique: false
  },
  pasarela: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  dispositivos: {
    type: Number,
    required: true,
  },
  estadoToken: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: false,
  },
  equipo: {
    type: String,
    required: false,
  },
  emailRecuperacion: {
    type: String,
    required: false,
  },
  pais: {
    type: String,
    required: false,
  },
  rut: {
    type: String,
    required: false,
  },
  datosPersonales: {
    type: Boolean,
    required: false,
  },
  
  created: {
    type: Date,
    default: Date.now
  }
});

const User: Model<IUser> = model("User", userSchema);

export default User;

