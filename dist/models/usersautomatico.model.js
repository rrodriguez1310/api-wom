"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    _user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Usersautomatico = mongoose_1.model("Usersautomatico", userSchema);
exports.default = Usersautomatico;
