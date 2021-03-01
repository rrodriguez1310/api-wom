"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productoSchema = new mongoose_1.Schema({
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
const Producto = mongoose_1.model("User", productoSchema);
exports.default = Producto;
