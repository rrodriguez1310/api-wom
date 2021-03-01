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
const generateJwt_utils_1 = require("../utils/generateJwt.utils");
const user_service_1 = require("./user.service");
// import { UserIpSave, UserIpFindOne } from './userIp.service'
class AuthRememberFalseService {
    constructor(code, remember, ip) {
        this.code = code;
        this.remember = remember;
        this.ip = ip;
    }
    AuthCase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(this.code);
                console.log(this.remember);
                console.log(this.ip);
                console.log('Prue3ba');
                let authServiceFindOne;
                authServiceFindOne = new user_service_1.AuthServiceFindOne(this.code);
                const user = yield authServiceFindOne.UserFindOne();
                if (user === null) {
                    throw false;
                }
                let jwtGenerate;
                jwtGenerate = new generateJwt_utils_1.GenerateJwt(`${user ? ._id : }`, `${user ? .email : }`, this.remember);
                let payload = yield jwtGenerate.payload();
                return payload;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.AuthRememberFalseService = AuthRememberFalseService;
