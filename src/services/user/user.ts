import ipMiddleware from "../../utils/ip.utils";
import { Request, Response } from 'express';
import { IUser } from '../../interface/user.interface';
import { ILogin } from '../../interface/login.interface';
import { UserInsert, UserFindAll, UserFindOne, UserUpdate, UserUpdatePersonals, UserDelete} from './user.services';
import { DecodeToken } from "../../utils/decodeJwt.utils";

export class UserInsertMain {
    public async insertMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {

        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const pasarela: IUser['pasarela'] = req.body.pasarela;
                const estadoToken: IUser['estadoToken'] = req.body.estadoToken;
                const material: IUser['material'] = req.body.material;
                const dispositivos: IUser['dispositivos'] = req.body.dispositivos;
                const cid: IUser['cid'] = req.body.cid;

                let userInsert: UserInsert;
                userInsert = new UserInsert(pasarela, estadoToken, dispositivos, material, cid);
                userInsert.userInsertMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en el Ingreso del usuario.', error });
                })
            } else {
                return res.status(401).json({ message: 'Usted no tiene privilegios para accesar a esta area.' });
            }
        }
        catch (error) {
            return res.status(401).json({ message: error })
        }
    }

    static async verify(token: ILogin['token']) {
        try {
            let decodeToken: DecodeToken;
            decodeToken = new DecodeToken(token);
            const decode = await decodeToken.Decode();
            return decode;

        } catch (error) {
            return error;
        }
    }
}

export class UserFindtMain {
    public async findallMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {

        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {

                let userFindAll: UserFindAll;
                userFindAll = new UserFindAll();
                userFindAll.userFindallsMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error al listar los usuarios', error });
                })
            } else {
                return res.status(401).json({ message: 'Usted no tiene privilegios para accesar a esta area.' });
            }
        }
        catch (error) {
            return res.status(401).json({ message: error })
        }
    }

}

export class UserFindOneMain {
    public async userFindOneMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const id: IUser['id'] = req.params.id;

                let userFindOne: UserFindOne;
                userFindOne = new UserFindOne(id);
                userFindOne.userFindOneMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la busqueda del usuario.', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class UserUpdateMain {
    public async userUpdateMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const pasarela: IUser['pasarela'] = req.body.pasarela;
                const estadoToken: IUser['estadoToken'] = req.body.estadoToken;
                const material: IUser['material'] = req.body.material;
                const dispositivos: IUser['dispositivos'] = req.body.dispositivos;
                const cid: IUser['cid'] = req.body.cid;

                let userUpdate: UserUpdate;
                userUpdate = new UserUpdate( pasarela, estadoToken, dispositivos, material, cid);
                userUpdate.userUpdateMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro editado correctamente.' });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class UserUpdatePersonalsMain {
    public async userUpdatePersonalsMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const id: IUser['id'] = req.params.id;
                const email: IUser['estadoToken'] = req.body.email;
                const nombre: IUser['nombre'] = req.body.nombre;
                const apellidos: IUser['apellidos'] = req.body.apellidos;
                const fechaNacimiento: IUser['fechaNacimiento'] = req.body.fechaNacimiento;
                const genero: IUser['genero'] = req.body.genero;
                const tipo: IUser['tipo'] = req.body.tipo;
                const telefono: IUser['telefono'] = req.body.telefono;
                const equipo: IUser['equipo'] = req.body.equipo;
                const pais: IUser['pais'] = req.body.pais;
                const rut: IUser['rut'] = req.body.rut;

                let userUpdatePersonals: UserUpdatePersonals;
                userUpdatePersonals = new UserUpdatePersonals(id, email, nombre, apellidos, fechaNacimiento, genero, tipo, telefono, equipo, pais, rut);
                    userUpdatePersonals.userUpdatePersonalsMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro editado correctamente.' });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}

export class UserrDeleteMain {
    public async userDelteMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UserInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const id: IUser['id'] = req.params.id;
                let userDelete: UserDelete;
                userDelete = new UserDelete(id);
                userDelete.userDeleteMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro borrado  correctamente.' });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }


}
