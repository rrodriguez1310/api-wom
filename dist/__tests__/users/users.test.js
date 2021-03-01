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
const app_1 = __importDefault(require("../../app"));
const request = require('supertest');
describe('Test en users', () => {
    it('Test cambiar datos personales', () => __awaiter(this, void 0, void 0, function* () {
        const nombre = "Leon1";
        const apellido = "tecnoboyer_Prueba";
        const fecha_nacimiento = "2021-07-04T23:59:59.999+0000";
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjkxM2FiYy1iNTZiLTQ3MjEtYjQzNy0xMWZhNjVmOTE1ZDQiLCJ1c2VySWQiOiI1ZDY1NmE3Nzc4ZGZjMDBjNjI4ZjQ5NzAiLCJub21icmUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiYXBlbGxpZG9QYXRlcm5vIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImZlY2hhX25hY2ltaWVudG8iOiJ4eHh4IiwiZmVjaGFOYWNpbWllbnRvIjoieHh4eHgiLCJnZW5lcm8iOiJ4eHh4eCIsImVtYWlsIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImNvZGUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiZXN0YWRvIjoiY29tcGxldGFkbyIsInBhc2FyZWxhIjoicGFzYXJlbGEiLCJtYXRlcmlhbCI6Im1hZXRlcmlhbCIsImRpc3Bvc2l0aXZvcyI6ImRpc3Bvc2l0aXZvcyIsImlzcyI6ImFwaS5jZGYuY2wiLCJhcHBJZCI6ImFwcElkIiwicmVtZW1iZXIiOnRydWUsImlhdCI6MTYxMzUwMDI5OH0.IEhNAl78xrSeOOzVG7onKA2Sa99NFTXseu8vrU8iBwgsAnGtgOzUTHArw9tcqzUFWgTJleMk1NkMmQAAYPsXzSLB7P7p-fEdwc5o6q00zz1x5LUYAd6tMgMPT-8BN9-q_S9mtpDOvj3yY73w9DZQ5JLavb-T22e27-KfJcc1sKyJ19URfT1UAll90tB0W9c8S7mw4q55J6xrYR1um-PdqjKyFkb6SFMRShLMJFBwljEBqrgM8s5ecAtzya-qU-_qLF4W6f2QyFwVwdQfVS7T43PfTO4esp3ZpWRqo6OABoV7a0kWDMHRvuqOonlnbzvBfI7otRyiT18qb4IDeXXb5g";
        const res = yield request(app_1.default)
            .post(`/api/v2/userSelfService/editinfo`)
            .send({
            "name": nombre,
            "surname": apellido,
            "birthday": fecha_nacimiento,
            "token": token
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('User updated');
    }));
    it('Listar usuarios', () => __awaiter(this, void 0, void 0, function* () {
        const page = 1;
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjkxM2FiYy1iNTZiLTQ3MjEtYjQzNy0xMWZhNjVmOTE1ZDQiLCJ1c2VySWQiOiI1ZDY1NmE3Nzc4ZGZjMDBjNjI4ZjQ5NzAiLCJub21icmUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiYXBlbGxpZG9QYXRlcm5vIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImZlY2hhX25hY2ltaWVudG8iOiJ4eHh4IiwiZmVjaGFOYWNpbWllbnRvIjoieHh4eHgiLCJnZW5lcm8iOiJ4eHh4eCIsImVtYWlsIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImNvZGUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiZXN0YWRvIjoiY29tcGxldGFkbyIsInBhc2FyZWxhIjoicGFzYXJlbGEiLCJtYXRlcmlhbCI6Im1hZXRlcmlhbCIsImRpc3Bvc2l0aXZvcyI6ImRpc3Bvc2l0aXZvcyIsImlzcyI6ImFwaS5jZGYuY2wiLCJhcHBJZCI6ImFwcElkIiwicmVtZW1iZXIiOnRydWUsImlhdCI6MTYxMzUwMDI5OH0.IEhNAl78xrSeOOzVG7onKA2Sa99NFTXseu8vrU8iBwgsAnGtgOzUTHArw9tcqzUFWgTJleMk1NkMmQAAYPsXzSLB7P7p-fEdwc5o6q00zz1x5LUYAd6tMgMPT-8BN9-q_S9mtpDOvj3yY73w9DZQ5JLavb-T22e27-KfJcc1sKyJ19URfT1UAll90tB0W9c8S7mw4q55J6xrYR1um-PdqjKyFkb6SFMRShLMJFBwljEBqrgM8s5ecAtzya-qU-_qLF4W6f2QyFwVwdQfVS7T43PfTO4esp3ZpWRqo6OABoV7a0kWDMHRvuqOonlnbzvBfI7otRyiT18qb4IDeXXb5g";
        const res = yield request(app_1.default)
            .post(`/api/v2/userAdministration/list`)
            .send({
            "page": page,
            "token": token
        });
        expect(res.statusCode).toEqual(200);
    }));
    it('Editar usuarios', () => __awaiter(this, void 0, void 0, function* () {
        const code = "miestadiocdfprueba@hotmail.com";
        const email = "miestadiocdfpruebaN@hotmail.com";
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjkxM2FiYy1iNTZiLTQ3MjEtYjQzNy0xMWZhNjVmOTE1ZDQiLCJ1c2VySWQiOiI1ZDY1NmE3Nzc4ZGZjMDBjNjI4ZjQ5NzAiLCJub21icmUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiYXBlbGxpZG9QYXRlcm5vIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImZlY2hhX25hY2ltaWVudG8iOiJ4eHh4IiwiZmVjaGFOYWNpbWllbnRvIjoieHh4eHgiLCJnZW5lcm8iOiJ4eHh4eCIsImVtYWlsIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImNvZGUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiZXN0YWRvIjoiY29tcGxldGFkbyIsInBhc2FyZWxhIjoicGFzYXJlbGEiLCJtYXRlcmlhbCI6Im1hZXRlcmlhbCIsImRpc3Bvc2l0aXZvcyI6ImRpc3Bvc2l0aXZvcyIsImlzcyI6ImFwaS5jZGYuY2wiLCJhcHBJZCI6ImFwcElkIiwicmVtZW1iZXIiOnRydWUsImlhdCI6MTYxMzUwMDI5OH0.IEhNAl78xrSeOOzVG7onKA2Sa99NFTXseu8vrU8iBwgsAnGtgOzUTHArw9tcqzUFWgTJleMk1NkMmQAAYPsXzSLB7P7p-fEdwc5o6q00zz1x5LUYAd6tMgMPT-8BN9-q_S9mtpDOvj3yY73w9DZQ5JLavb-T22e27-KfJcc1sKyJ19URfT1UAll90tB0W9c8S7mw4q55J6xrYR1um-PdqjKyFkb6SFMRShLMJFBwljEBqrgM8s5ecAtzya-qU-_qLF4W6f2QyFwVwdQfVS7T43PfTO4esp3ZpWRqo6OABoV7a0kWDMHRvuqOonlnbzvBfI7otRyiT18qb4IDeXXb5g";
        const res = yield request(app_1.default)
            .post(`/api/v2/userAdministration/edit`)
            .send({
            "code": code,
            "email": email,
            "token": token
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Updated succesfully');
    }));
    it('Borrar usuarios', () => __awaiter(this, void 0, void 0, function* () {
        const id = "5fd1103f81447b5ad6863a2b";
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjkxM2FiYy1iNTZiLTQ3MjEtYjQzNy0xMWZhNjVmOTE1ZDQiLCJ1c2VySWQiOiI1ZDY1NmE3Nzc4ZGZjMDBjNjI4ZjQ5NzAiLCJub21icmUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiYXBlbGxpZG9QYXRlcm5vIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImZlY2hhX25hY2ltaWVudG8iOiJ4eHh4IiwiZmVjaGFOYWNpbWllbnRvIjoieHh4eHgiLCJnZW5lcm8iOiJ4eHh4eCIsImVtYWlsIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImNvZGUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiZXN0YWRvIjoiY29tcGxldGFkbyIsInBhc2FyZWxhIjoicGFzYXJlbGEiLCJtYXRlcmlhbCI6Im1hZXRlcmlhbCIsImRpc3Bvc2l0aXZvcyI6ImRpc3Bvc2l0aXZvcyIsImlzcyI6ImFwaS5jZGYuY2wiLCJhcHBJZCI6ImFwcElkIiwicmVtZW1iZXIiOnRydWUsImlhdCI6MTYxMzUwMDI5OH0.IEhNAl78xrSeOOzVG7onKA2Sa99NFTXseu8vrU8iBwgsAnGtgOzUTHArw9tcqzUFWgTJleMk1NkMmQAAYPsXzSLB7P7p-fEdwc5o6q00zz1x5LUYAd6tMgMPT-8BN9-q_S9mtpDOvj3yY73w9DZQ5JLavb-T22e27-KfJcc1sKyJ19URfT1UAll90tB0W9c8S7mw4q55J6xrYR1um-PdqjKyFkb6SFMRShLMJFBwljEBqrgM8s5ecAtzya-qU-_qLF4W6f2QyFwVwdQfVS7T43PfTO4esp3ZpWRqo6OABoV7a0kWDMHRvuqOonlnbzvBfI7otRyiT18qb4IDeXXb5g";
        const res = yield request(app_1.default)
            .post(`/api/v2/userAdministration/delete`)
            .send({
            "id": id,
            "token": token
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Deleted succesfully');
    }));
    it('Crear usuarios', () => __awaiter(this, void 0, void 0, function* () {
        const name = "fulanito4";
        const surname = "perezcejo";
        const email = "fperezcejo7@test7.com";
        const code = "fperezcejo7@test7.com";
        const state = "True";
        const birthday = new Date('2016-12-26T11:47:05.935+0000');
        const gender = "M";
        const gateway = "Transbank";
        const material = "full";
        const device = "M";
        const recover_email = "fperezcejo3@test3.com";
        const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjkxM2FiYy1iNTZiLTQ3MjEtYjQzNy0xMWZhNjVmOTE1ZDQiLCJ1c2VySWQiOiI1ZDY1NmE3Nzc4ZGZjMDBjNjI4ZjQ5NzAiLCJub21icmUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiYXBlbGxpZG9QYXRlcm5vIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImZlY2hhX25hY2ltaWVudG8iOiJ4eHh4IiwiZmVjaGFOYWNpbWllbnRvIjoieHh4eHgiLCJnZW5lcm8iOiJ4eHh4eCIsImVtYWlsIjoibGVvbmFyZG8uYm95ZXJAdHVybmVyLmNvbSIsImNvZGUiOiJsZW9uYXJkby5ib3llckB0dXJuZXIuY29tIiwiZXN0YWRvIjoiY29tcGxldGFkbyIsInBhc2FyZWxhIjoicGFzYXJlbGEiLCJtYXRlcmlhbCI6Im1hZXRlcmlhbCIsImRpc3Bvc2l0aXZvcyI6ImRpc3Bvc2l0aXZvcyIsImlzcyI6ImFwaS5jZGYuY2wiLCJhcHBJZCI6ImFwcElkIiwicmVtZW1iZXIiOnRydWUsImlhdCI6MTYxMzUwMDI5OH0.IEhNAl78xrSeOOzVG7onKA2Sa99NFTXseu8vrU8iBwgsAnGtgOzUTHArw9tcqzUFWgTJleMk1NkMmQAAYPsXzSLB7P7p-fEdwc5o6q00zz1x5LUYAd6tMgMPT-8BN9-q_S9mtpDOvj3yY73w9DZQ5JLavb-T22e27-KfJcc1sKyJ19URfT1UAll90tB0W9c8S7mw4q55J6xrYR1um-PdqjKyFkb6SFMRShLMJFBwljEBqrgM8s5ecAtzya-qU-_qLF4W6f2QyFwVwdQfVS7T43PfTO4esp3ZpWRqo6OABoV7a0kWDMHRvuqOonlnbzvBfI7otRyiT18qb4IDeXXb5g";
        const res = yield request(app_1.default)
            .post(`/api/v2/userAdministration/create`)
            .send({
            "name": name,
            "surname": surname,
            "email": email,
            "birthday": birthday,
            "code": code,
            "state": state,
            "gender": gender,
            "gateway": gateway,
            "material": material,
            "device": device,
            "recover_email": recover_email,
            "token": token
        });
        expect(res.statusCode).toEqual(503);
    }));
});
