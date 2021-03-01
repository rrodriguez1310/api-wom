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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const conf_constants_1 = require("../constants/conf.constants");
class GenerateJwt {
    constructor(_id, email, remember) {
        this._id = _id;
        this.email = email;
        this.remember = remember;
    }
    payload() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = {
                    jti: uuid_1.v4(),
                    userId: this._id,
                    nombre: this.email,
                    apellidoPaterno: this.email,
                    fecha_nacimiento: "xxxx",
                    fechaNacimiento: "xxxxx",
                    genero: "xxxxx",
                    email: this.email,
                    code: this.email,
                    estado: 'completado',
                    pasarela: 'pasarela',
                    material: 'maeterial',
                    dispositivos: 'dispositivos',
                    iss: 'api.cdf.cl',
                    appId: 'appId',
                    remember: this.remember
                };
                return jsonwebtoken_1.default.sign(token, conf_constants_1.CER_PRIVATE, { algorithm: 'RS256' });
            }
            catch (error) {
                return error.message;
            }
        });
    }
}
exports.GenerateJwt = GenerateJwt;
