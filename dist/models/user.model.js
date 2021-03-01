"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: false,
        unique: false
    },
    apellido: {
        type: String,
        required: false,
        unique: false
    },
    fecha_nacimiento: {
        type: Date,
        required: false,
        unique: false
    },
    genero: {
        type: String,
        required: false,
        unique: false
    },
    code: {
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
    created: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose_1.model("User", userSchema);
exports.default = User;
