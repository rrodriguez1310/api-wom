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
class UserSelfService {
    editinfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /**
                 * Cliente edita datos usuario
                 * Permite cambiar datos personales del usuario a nivel de la BD de Warner
                 * La validación debe hacerse del lado de la vista en caso de no querer valores null en la BD
                 *
                 **/
                const name = req.body.name;
                const surname = req.body.surname;
                const birthday = req.body.birthday;
                const token = req.body.token;
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(token);
                const decode = yield decodeToken.Decode();
                let code = decode.code;
                let actualizado = yield user_model_1.default.updateOne({ code: code }, { nombre: name, apellido: surname, fecha_nacimiento: birthday });
                if (actualizado.n == 1) {
                    return res.status(200).json({ message: "User updated" });
                }
                else {
                    return res.status(400).json({ message: "User can't be updated" });
                }
            }
            catch (error) {
                return res.status(401).json({ message: error });
            }
        });
    }
}
exports.UserSelfService = UserSelfService;
