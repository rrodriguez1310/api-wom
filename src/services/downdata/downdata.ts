import ipMiddleware from "../../utils/ip.utils";
import { Request, Response } from 'express';
import { IDowndata } from '../../interface/downdata.interface';
import { ILogin } from '../../interface/login.interface';
import { DowndataInsert, DowndataFindAll } from './downdata.services';
import { DecodeToken } from "../../utils/decodeJwt.utils";
import {UserUpdate } from '../user/user.services';

export class DowndataInsertMain {
    public async InsertMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await DowndataInsertMain.verify(token);
            if (jwtDecode.appId === 'appId' ) {
                const pasarela: IDowndata['pasarela'] = req.body.pasarela;
                const estadoToken: IDowndata['estadoToken'] = req.body.estadoToken;
                const material: IDowndata['material'] = req.body.material;
                const dispositivos: IDowndata['dispositivos'] = req.body.dispositivos;
                const cid: IDowndata['cid'] = req.body.cid;
                const fechaBaja: IDowndata['fechaBaja'] = req.body.fechaBaja;
     
                let downdataInsert: DowndataInsert;
                downdataInsert = new DowndataInsert(pasarela, estadoToken, dispositivos, material, cid, fechaBaja);
                downdataInsert.downdataInsertMethod().then(aswer => {


                    let userUpdate: UserUpdate;
                    userUpdate = new UserUpdate(aswer.pasarela, aswer.estadoToken, aswer.dispositivos, aswer.material, aswer.cid);
                    userUpdate.userUpdateMethod().then(aswerUser => {
   
                        return res.status(200).json(aswer);
                    })
                   

                   
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en el Ingreso del usuario en Baja fue efectivo', error });
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

export class DowndataFindtMain {
    public async FindallMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await DowndataInsertMain.verify(token);
            if (jwtDecode.appId === 'appId' ) {
           
     
                let downdataFindAll: DowndataFindAll;
                downdataFindAll = new DowndataFindAll();
                downdataFindAll.downdatarFindallsMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error al listar los usuarios en Baja', error });
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



