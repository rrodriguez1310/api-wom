import { Document, Model, model, Schema } from "mongoose";
import { IProducto } from "../interface/producto.interface"

const productoSchema: Schema = new Schema({
  producto: {
    type: String,
    required: true,
    unique: true
  },
  material: {
    type: String,
    required: false,
    unique: false
  },
  descripcion: {
    type: String,
    required: false,
    unique: false
  },
  tipo: {
    type: Date,
    required: false,
    unique: false
  },
  estado: {
    type: String,
    required: false,
    unique: false
  },
  proveedor: {
    type: String,
    required: true,
    unique: true
  },
  dispositivos: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Producto: Model<IProducto> = model("User", productoSchema);

export default Producto;

