"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const decodeJwt_utils_1 = require("./../utils/decodeJwt.utils");
class UserAdministration {
    /**
    * Listar usuarios
    * validamos que el usuario tenga los privilegios para hacer el cambio
    *
    **/
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.body.token;
                const pagina = Number(req.query.page) || 1;
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(token);
                const decode = yield decodeToken.Decode();
                let userId = decode.userId;
                let solicitante = yield user_model_1.default.findById(userId);
                if (solicitante.tipo === 'administrador') {
                    let skip = pagina - 1;
                    skip = skip * 10;
                    const suscriptores = yield user_model_1.default.find({ code: { $exists: true }, estado: 'true' })
                        .skip(skip)
                        .limit(10)
                        .exec();
                    res.status(200).json({
                        ok: true,
                        skip,
                        suscriptores
                    });
                }
                else {
                    return res.status(401).json({ message: "Unauthorized user" });
                }
            }
            catch (error) {
                return res.status(503).json({ message: "Service unavailable" });
            }
        });
    }
    /**
     * Editar información sencible del usuario
     *
        **/
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const code = req.body.code;
                const token = req.body.token;
                /**
                * Editar usuarios
                * validamos que el usuario tenga los privilegios para hacer el cambio
                *
                **/
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(token);
                const decode = yield decodeToken.Decode();
                let userId = decode.userId;
                let solicitante = yield user_model_1.default.findById(userId);
                if (solicitante.tipo === 'administrador') {
                    let actualizado = yield user_model_1.default.updateOne({ code: code }, { email: email });
                    if (actualizado.n == 1) {
                        return res.status(200).json({ message: "Updated succesfully" });
                    }
                    else {
                        return res.status(400).json({ message: "Bad request" });
                    }
                }
                else {
                    return res.status(503).json({ message: "Service unavailable" });
                }
            }
            catch (error) {
                return res.status(401).json({ message: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.id;
                const token = req.body.token;
                //  /**
                //  * Eliminar usuarios
                //  * validamos que el usuario tenga los privilegios para hacer el cambio
                //  * 
                //  **/
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(token);
                const decode = yield decodeToken.Decode();
                let userId = decode.userId;
                let solicitante = yield user_model_1.default.findById(userId);
                if (solicitante.tipo === 'administrador') {
                    let borrado = yield user_model_1.default.updateOne({ _id: id }, { estado: 'false' });
                    if (borrado.n == 1) {
                        return res.status(200).json({ message: "Deleted succesfully" });
                    }
                    else {
                        return res.status(400).json({ message: "Bad request" });
                    }
                }
                else {
                    return res.status(503).json({ message: "Service unavailable" });
                }
            }
            catch (error) {
                return res.status(401).json({ message: error });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                const name = req.body.name;
                const surname = req.body.surname;
                const birthday = req.body.birthday;
                const gender = req.body.gender;
                const code = req.body.code;
                const state = req.body.state;
                const gateway = req.body.gateway;
                const material = req.body.material;
                const device = req.body.device;
                const recover_email = req.body.recover_email;
                const token = req.body.token;
                let nuevousuario = new user_model_1.default({
                    email: email,
                    nombre: name,
                    apellido: surname,
                    fecha_nacimiento: birthday,
                    genero: gender,
                    code: code,
                    estado: state,
                    pasarela: gateway,
                    material: material,
                    dispositivos: device,
                    email_recuperacion: recover_email
                });
                /**
                * Crear usuarios
                * validamos que el usuario tenga los privilegios para hacer el cambio
                *
                **/
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(token);
                const decode = yield decodeToken.Decode();
                let userId = decode.userId;
                let solicitante = yield user_model_1.default.findById(userId);
                if (solicitante.tipo === 'administrador') {
                    let insertado = yield nuevousuario.save();
                    if (insertado) {
                        return res.status(200).json({ message: "User created successfully" });
                    }
                    else {
                        return res.status(400).json({ message: " Bad request" });
                    }
                }
                else {
                    return res.status(401).json({ message: "User unauthorized " });
                }
            }
            catch (error) {
                return res.status(503).json({ message: error });
            }
        });
    }
}
exports.UserAdministration = UserAdministration;
