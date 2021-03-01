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
const conf_constants_1 = require("../constants/conf.constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class DecodeToken {
    constructor(token) {
        this.token = token;
    }
    Decode() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isTokenExpired = (token) => {
                    const { exp } = jsonwebtoken_1.default.verify(token, conf_constants_1.CER_PUBLIC);
                    const expirationDatetimeInSeconds = exp * 1000;
                    return Date.now() >= expirationDatetimeInSeconds;
                };
                if (isTokenExpired(this.token) === false) {
                    const decoded = jsonwebtoken_1.default.verify(this.token, conf_constants_1.CER_PUBLIC);
                    return decoded;
                }
                else {
                    throw new Error("Jwt expirado");
                }
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.DecodeToken = DecodeToken;
