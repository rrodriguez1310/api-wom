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
const userIp_model_1 = __importDefault(require("../models/userIp.model"));
class UserIpSave {
    constructor(_user, ip, count, created) {
        this._user = _user;
        this.ip = ip;
        this.count = count;
        this.created = created;
    }
    UserIpSave() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userIpModel = new userIp_model_1.default({
                    _user: this._user,
                    ip: this.ip,
                    count: this.count,
                    created: this.created
                });
                return userIpModel;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserIpSave = UserIpSave;
class UserIpFindOne {
    constructor(ip) {
        this.ip = ip;
    }
    UserIpFindOne() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let findUserIp = yield userIp_model_1.default.findOne({ ip: this.ip }).exec();
                return findUserIp;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserIpFindOne = UserIpFindOne;
