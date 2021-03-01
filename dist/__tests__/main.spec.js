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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const decodeJwt_utils_1 = require("../utils/decodeJwt.utils");
test("JWT OK, status 200, remember false", () => __awaiter(this, void 0, void 0, function* () {
    const code = "groupbycaq@gmail.com";
    const appId = "ecdf";
    const remember = false;
    const response = yield supertest_1.default(app_1.default)
        .post('/auth/')
        .send({
        "code": code,
        "appId": appId,
        "remember": remember
    });
    let decodeToken;
    decodeToken = new decodeJwt_utils_1.DecodeToken(response.body);
    const jwtDecode = yield decodeToken.Decode();
    expect(jwtDecode.code).toEqual(code);
    expect(jwtDecode.remember).toEqual(remember);
    expect(response.status).toEqual(200);
}));
// test("JWT OK, status 200, remember true", async () => {
//   const code = "groupbycaq@gmail.com";
//   const appId = "ecdf";
//   const remember = true
//   const response = await supertest(app)
//     .post('/auth/')
//     .send({
//       "code": code,
//       "appId": appId,
//       "remember": true
//     })
//   let decodeToken: DecodeToken;
//   decodeToken = new DecodeToken(response.body);
//   const jwtDecode = await decodeToken.Decode();
//   expect(jwtDecode.code).toEqual(code)
//   expect(jwtDecode.remember).toEqual(remember)
//   expect(response.status).toEqual(200)
// });
// test("JWT automatic False", async () => {
//   const jwt = "JWT_FEAKE";
//   const response = await supertest(app)
//     .post('/auth/')
//     .send({
//       "token": jwt
//     })
//     expect(response.body).toEqual({ message: 'El cliente no tiene un acceso automatico activo' });
// });
