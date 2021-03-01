import { Request, Response } from 'express';
import User from '../models/user.model';
import { TokenDecode } from './authAutomatic.service'
import {DecodeToken} from  './../utils/decodeJwt.utils'

import { IUser } from '../interface/user.interface';

export class UserSelfService {




    public async editinfo(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
/**
 * Cliente edita datos usuario
 * Permite cambiar datos personales del usuario a nivel de la BD de Warner 
 * La validación debe hacerse del lado de la vista en caso de no querer valores null en la BD
 * 
 **/

            const name: IUser['nombre'] = req.body.name;
            const surname: IUser['apellido'] = req.body.surname;
            const birthday: IUser['fecha_nacimiento'] = req.body.birthday;  
            const token: string = req.body.token;

            let decodeToken: DecodeToken;
            decodeToken = new DecodeToken(token);
            const decode = await decodeToken.Decode();
            let code=decode.code;
            let actualizado= await User.updateOne({code:code},
                {nombre:name,apellido:surname,fecha_nacimiento:birthday}
            );
            if(actualizado.n==1){
                return res.status(200).json({message:"User updated"});
            }else{
                return res.status(400).json({message:"User can't be updated"});

            }              

         } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
/**
 * Editar preferencias del usuario
 * Se debe avanzar en la negociación con el integrador para tener el requirimiento
 * saneado y poder proceder con la actualización
 **/


}