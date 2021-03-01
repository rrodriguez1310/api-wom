import app from "../../app";
const request = require('supertest');
import { ProveedorInsert } from '../../services/proveedor/proveedor.services';
import { IUser } from '../../interface/user.interface';

describe('Test en users', () => {
    it('Test cambiar datos personales', async () => {
        const nombre: IUser['nombre'] = "usuarioNombrePrueba";
        const apellido: IUser['apellido'] = "usuarioApellidoPrueba";
        const fecha_nacimiento: IUser['fecha_nacimiento'] =new Date("1992-05-07T12:34:56.777Z");
        const id:IUser['_id']="5dc0474bb681fa335cab87f3";
        const res = await request(app)
            .post(`/userSelfService/info`)
            .send({
                "nombre": nombre,
                "apellido": apellido,
                "fecha_nacimiento": fecha_nacimiento,
                "id":id
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Successfully Changed');

    });




});




