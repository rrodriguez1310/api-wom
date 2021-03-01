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
const node_fetch_1 = __importDefault(require("node-fetch"));
const jsonwebtoken_1 = require("jsonwebtoken");
class EvergentAuthService {
    constructor(grant_type, code, client_id, client_secret) {
        this.grant_type = grant_type;
        this.code = code;
        this.client_id = client_id;
        this.client_secret = client_secret;
    }
    AuthJwt() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield node_fetch_1.default('https://rest-dev.evergent.com/wom/getOAuthAccessToken?grant_type=authorization_code&code=riky1p5kLD&client_id=Cdfsso&client_secret=1YuxWHU9lxdhWPLd', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' }
                });
                const json = yield response.json();
                console.log("🚀 ~ file: evergentAuth.utils.ts ~ line 27 ~ EvergentAuthService ~ AuthJwt ~ json", json);
                if (json.GetOAuthAccessTokenResponseMessage.error === 'invalid_grant') {
                    throw new Error(json.GetOAuthAccessTokenResponseMessage.error);
                }
                return jsonwebtoken_1.decode;
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.EvergentAuthService = EvergentAuthService;
