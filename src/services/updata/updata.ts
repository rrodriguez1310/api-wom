import ipMiddleware from "../../utils/ip.utils";
import { Request, Response } from 'express';
import { IUpdata } from '../../interface/updata.interface';
import { ILogin } from '../../interface/login.interface';
import { UpdataInsert, UpdataFindAll } from './updata.services';
import { DecodeToken } from "../../utils/decodeJwt.utils";
import { UserUpdate } from '../user/user.services';
import User from "../../models/user.model";
import { IUser } from "../../interface/user.interface";

export class UpdataInsertMain {
    public async InsertMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {

        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UpdataInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const pasarela: IUpdata['pasarela'] = req.body.pasarela;
                const estadoToken: IUpdata['estadoToken'] = req.body.estadoToken;
                const material: IUpdata['material'] = req.body.material;
                const dispositivos: IUpdata['dispositivos'] = req.body.dispositivos;
                const cid: IUpdata['cid'] = req.body.cid;
                const fechaAlta: IUpdata['fechaAlta'] = req.body.fechaAlta;

                let updataInsert: UpdataInsert;
                updataInsert = new UpdataInsert(pasarela, estadoToken, dispositivos, material, cid, fechaAlta);
                updataInsert.updataInsertMethod().then(aswer => {
                
                    let userUpdate: UserUpdate;
                    userUpdate = new UserUpdate(aswer.pasarela, aswer.estadoToken, aswer.dispositivos, aswer.material, aswer.cid);
                    userUpdate.userUpdateMethod().then(aswerUser => {
   
                        return res.status(200).json(aswer);
                    })
                   
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en el Ingreso del usuario en Alta.', error });
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

export class UpdataFindtMain {
    public async FindallMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {

        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await UpdataInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {


                let updataFindAll: UpdataFindAll;
                updataFindAll = new UpdataFindAll();
                updataFindAll.updatarFindallsMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error al listar los usuarios en Alta', error });
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



