import { Request, Response } from 'express';
import { ProviderInsert, ProviderFindAll, ProviderFindOne, ProviderUpdate, ProviderDelete } from './provider.services';
import { IProvider } from '../../interface/provider.interface';
import { DecodeToken } from '../../utils/decodeJwt.utils';
import { ILogin } from '../../interface/login.interface';

export class ProviderInsertMain {
    public async InsertMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProviderInsertMain.verify(token);
            if (jwtDecode.tipo === 'administrador' || jwtDecode.tipo === 'callcenter') {
                const nombre: IProvider['nombre'] = req.body.nombre;
                const descripcion: IProvider['descripcion'] = req.body.descripcion;
                const imagen: IProvider['imagen'] = req.body.imagen;

                let providerInsert: ProviderInsert;
                providerInsert = new ProviderInsert(nombre, descripcion, imagen);
                providerInsert.ProviderInsertMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en el Ingreso del provider', error });
                })
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

export class ProviderFindAllMain {
    public async ProviderFindAllMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProviderInsertMain.verify(token);
            if (jwtDecode.tipo === 'administrador' || jwtDecode.tipo === 'callcenter') {
                let providerFindAll: ProviderFindAll;
                providerFindAll = new ProviderFindAll();
                providerFindAll.ProviderFindallsMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la busqueda de todos los provideres', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class ProviderFindOneMain {
    public async ProviderFindOneMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProviderInsertMain.verify(token);
            if (jwtDecode.tipo === 'administrador' || jwtDecode.tipo === 'callcenter') {
                const id: IProvider['id'] = req.params.id;

                let providerFindOne: ProviderFindOne;
                providerFindOne = new ProviderFindOne(id);
                providerFindOne.ProviderFindOneMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la busqueda del provider.', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}

export class ProviderUpdateMain {
    public async ProviderUpdateMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProviderInsertMain.verify(token);
            if (jwtDecode.tipo === 'administrador' || jwtDecode.tipo === 'callcenter') {
                const id: IProvider['id'] = req.params.id;
                const nombre: IProvider['nombre'] = req.body.nombre;
                const descripcion: IProvider['descripcion'] = req.body.descripcion;
                const imagen: IProvider['imagen'] = req.body.imagen;

                let providerUpdate: ProviderUpdate;
                providerUpdate = new ProviderUpdate(id, nombre, descripcion, imagen);
                providerUpdate.ProviderUpdateMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro editado correctamente.' });
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la edición del provider.', error });
                })

            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class ProviderDeleteMain {
    public async ProviderDelteMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProviderInsertMain.verify(token);
            if (jwtDecode.tipo === 'administrador' || jwtDecode.tipo === 'callcenter') {
                const id: IProvider['id'] = req.params.id;

                let providerDelete: ProviderDelete;
                providerDelete = new ProviderDelete(id);
                providerDelete.ProviderDeleteMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro borrado  correctamente.' });
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en borrar del provider.', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}