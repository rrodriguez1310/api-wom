import { Document, Model, model, Schema } from "mongoose";
import { IProduct} from "../interface/product.interface"

const productSchema: Schema = new Schema({
  producto: {
    type: String,
    required: true,
    unique: false
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
    type: String,
    required: false,
    unique: false
  },
  estado: {
    type: Boolean,
    required: false,
    unique: false
  },
  proveedor: {
    type: String,
    required: true,
    unique: true
  },
  dispositivos: {
    type: Number,
    required: true,
    unique: false
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

const Product: Model<IProduct> = model("Product", productSchema);

export default Product;

