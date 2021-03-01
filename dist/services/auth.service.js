"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRememberFalse_service_1 = require("./authRememberFalse.service");
const authRememberTrue_service_1 = require("./authRememberTrue.service");
const authAutomatic_service_1 = require("./authAutomatic.service");
class AuthService {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Entra en LOGIN');
                const remember = req.body.remember;
                const code = req.body.code;
                const appId = req.body.appId;
                const token = req.body.token;
                const header = req.headers;
                const ip = req.body.ip;
                switch (remember) {
                    case false:
                        console.log(1);
                        let evergentAuthService;
                        // evergentAuthService = new EvergentAuthService('authorization_code', 'V4YpWk9x7n', 'Cdfsso', '1YuxWHU9lxdhWPLd');
                        // const statusCustomerEvergent = await evergentAuthService.AuthJwt();
                        // console.log("🚀 ~ file: auth.service.ts ~ line 26 ~ AuthService ~ Login ~ statusCustomerEvergent", statusCustomerEvergent)
                        let authRememberFalseService;
                        authRememberFalseService = new authRememberFalse_service_1.AuthRememberFalseService(code, remember, ip);
                        authRememberFalseService.AuthCase().then(jwt => {
                            if (jwt === false) {
                                return res.status(400).json({ message: 'Ocurrio un problema, intentalo nuevamente' });
                            }
                            else {
                                return res.status(200).json(jwt);
                            }
                        }).catch((err) => {
                            return res.status(400).json({ message: err });
                        });
                        break;
                    case true:
                        console.log('elautService');
                        console.log(2);
                        let authRememberTrueService;
                        authRememberTrueService = new authRememberTrue_service_1.AuthRememberTrueService(code, remember, header);
                        authRememberTrueService.AuthCase().then(jwt => {
                            if (jwt === false) {
                                return res.status(400).json({ message: 'Ocurrio un problema, intentalo nuevamente' });
                            }
                            else {
                                return res.status(200).json(jwt);
                            }
                        }).catch((err) => {
                            return res.status(401).json({ message: err });
                        });
                        break;
                    default:
                        console.log(3);
                        let authAutomaticService;
                        authAutomaticService = new authAutomatic_service_1.TokenDecode(token, header);
                        authAutomaticService.Decode().then((v) => {
                            console.log(v.status);
                            if (v.status === false) {
                                throw new Error('El cliente no tiene un acceso automatico activo');
                            }
                            else {
                                return res.status(200).json(v);
                            }
                        }).catch((err) => {
                            return res.status(401).json({ message: err.message });
                        });
                        break;
                }
            }
            catch (error) {
                return res.status(401).json({ message: error });
            }
        });
    }
}
exports.AuthService = AuthService;
