import { Document, Model, model, Schema } from "mongoose";
import { IProvider } from '../interface/provider.interface';

const providerSchema: Schema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: false 
  },
  descripcion: {
    type: String,
    required: false,
    unique: false
  },
  imagen: {
    type: String,
    required: false,
    unique: false
  },
  estado: {
    type: Boolean,
    required: false,
    unique: false
  },

  created: {
    type: Date,
    default: Date.now
  }
});

const Provider: Model<IProvider> = model("Provider", providerSchema);

export default Provider;

