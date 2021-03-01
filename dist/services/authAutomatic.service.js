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
const decodeJwt_utils_1 = require("../utils/decodeJwt.utils");
const userAutomatic_service_1 = require("./userAutomatic.service");
class TokenDecode {
    constructor(token, header) {
        this.token = token;
        this.header = header;
    }
    Decode() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userAutomaticService;
                userAutomaticService = new userAutomatic_service_1.UserAutomaticService(this.token);
                const userJwt = yield userAutomaticService.UserAutomatic();
                let decodeToken;
                decodeToken = new decodeJwt_utils_1.DecodeToken(this.token);
                const decode = yield decodeToken.Decode();
                let authServiceFindOne;
                authServiceFindOne = new user_service_1.AuthServiceFindOne(decode.email);
                const user = yield authServiceFindOne.UserFindOne();
                if (userJwt) {
                    let jwtGenerate;
                    jwtGenerate = new generateJwt_utils_1.GenerateJwt(`${user ? ._id : }`, `${user ? .email : }`, decode.remember);
                    let payload = yield jwtGenerate.payload();
                    if (payload) {
                        let userAutomaticUpdate;
                        userAutomaticUpdate = new userAutomatic_service_1.UserAutomaticUpdate(user._id, this.token, payload, this.header);
                        const userAutomatic = yield userAutomaticUpdate.UserAutomatic();
                        if (userAutomatic.n === 1) {
                            return payload;
                        }
                    }
                }
                else {
                    return { status: false };
                }
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.TokenDecode = TokenDecode;
