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
const userAutomatic_service_1 = require("./userAutomatic.service");
class AuthRememberTrueService {
    constructor(code, remember, header) {
        this.code = code;
        this.remember = remember;
        this.header = header;
    }
    AuthCase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let authServiceFindOne;
                authServiceFindOne = new user_service_1.AuthServiceFindOne(this.code);
                const user = yield authServiceFindOne.UserFindOne();
                let userAutomaticFindUserId;
                userAutomaticFindUserId = new userAutomatic_service_1.UserAutomaticFindUserId(user ? ._id : );
                const existRegisterUser = yield userAutomaticFindUserId.FindUserID();
                console.log("🚀 ~ file: authRememberTrue.service.ts ~ line 25 ~ AuthRememberTrueService ~ AuthCase ~ existRegisterUser", existRegisterUser);
                if (existRegisterUser === null) {
                    throw false;
                }
                let jwtGenerate;
                jwtGenerate = new generateJwt_utils_1.GenerateJwt(`${user ? ._id : }`, `${user ? .email : }`, this.remember);
                let payload = yield jwtGenerate.payload();
                let userAutomaticSave;
                let date = new Date();
                userAutomaticSave = new userAutomatic_service_1.UserAutomaticSave(user ? ._id : , this.header, payload, date);
                if (existRegisterUser !== null) {
                    let userAutomaticUpdate;
                    userAutomaticUpdate = new userAutomatic_service_1.UserAutomaticUpdate(user._id, existRegisterUser.jwt, payload, this.header);
                    const userAutomatic = yield userAutomaticUpdate.UserAutomatic();
                    if (userAutomatic.n === 1) {
                        return payload;
                    }
                }
                else {
                    let save = yield userAutomaticSave.save();
                    return payload;
                }
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.AuthRememberTrueService = AuthRememberTrueService;
