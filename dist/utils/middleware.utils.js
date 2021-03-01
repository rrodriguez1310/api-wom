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
const authMiddleware = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log('authMiddleware presente');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        console.log(req.headers);
        next();
        // const isTokenExpired = (token: string): boolean => {
        //     const { exp } = jwt.verify(token, CER_PUBLIC) as {
        //         exp: number;
        //     };
        //     const expirationDatetimeInSeconds = exp * 1000;
        //     return Date.now() >= expirationDatetimeInSeconds;
        // };
        // if (isTokenExpired(`${req.headers.authorization}`) === false) {
        //     const decoded = jwt.verify(`${req.headers.authorization}`, CER_PUBLIC)
        //     req.body.payload = decoded
        //     next();
        // } else {
        //     return res.status(401).json({ message: 'El token no es valido' })
        // }
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
});
exports.default = authMiddleware;
