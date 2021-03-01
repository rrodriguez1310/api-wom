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
const usersautomatico_model_1 = __importDefault(require("../models/usersautomatico.model"));
class UserAutomaticService {
    constructor(token) {
        this.token = token;
    }
    UserAutomatic() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usersautomatico = yield usersautomatico_model_1.default.findOne({ jwt: this.token }, 'jwt').exec();
                return usersautomatico;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserAutomaticService = UserAutomaticService;
class UserAutomaticUpdate {
    constructor(_user, tokenOld, tokenNew, header) {
        this._user = _user;
        this.tokenOld = tokenOld;
        this.tokenNew = tokenNew;
        this.header = header;
    }
    UserAutomatic() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const update = yield usersautomatico_model_1.default.updateOne({ jwt: this.tokenOld }, { jwt: this.tokenNew, cabecera: this.header });
                return update;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserAutomaticUpdate = UserAutomaticUpdate;
class UserAutomaticSave {
    constructor(_user, cabecera, jwt, fecha) {
        this._user = _user;
        this.cabecera = cabecera;
        this.jwt = jwt;
        this.fecha = fecha;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userAutomaticData = new usersautomatico_model_1.default({
                    _user: this._user,
                    cabecera: this.cabecera,
                    jwt: this.jwt,
                    fecha: this.fecha
                });
                const save = yield userAutomaticData.save();
                return save;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserAutomaticSave = UserAutomaticSave;
class UserAutomaticFindUserId {
    constructor(_user) {
        this._user = _user;
    }
    FindUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usersautomatico = yield usersautomatico_model_1.default.findOne({ _user: this._user }).exec();
                console.log(usersautomatico);
                return usersautomatico;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserAutomaticFindUserId = UserAutomaticFindUserId;
