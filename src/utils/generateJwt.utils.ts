import { IUser } from '../interface/user.interface'
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { CER_PRIVATE } from '../constants/conf.constants';
export class GenerateJwt {

  _id: IUser['_id'];
  cid: IUser['cid'];
  //remember: boolean;

  constructor(
    _id: IUser['_id'],
    cid: IUser['cid'],
    // remember: boolean
  ) {
    this._id = _id
    this.cid = cid
    //this.remember = remember
  }

  public async payload(): Promise<any> {
    try {

      const token = {
        jti: uuidv4(),
        userId: this._id,
        nombre: this.cid,
        apellidoPaterno: this.cid,
        fecha_nacimiento: "xxxx",
        fechaNacimiento: "xxxxx",
        genero: "xxxxx",
        email: this.cid,
        code: this.cid,
        estado: 'completado',
        pasarela: 'pasarela',
        material: 'maeterial',
        dispositivos: 'dispositivos',
        iss: 'api.cdf.cl',
        appId: 'appId',
        remember: false,
        tipo:'local'
      }
      return jwt.sign(token, CER_PRIVATE, { algorithm: 'RS256' });

    } catch (error) {
      return error.message
    }
  }
}

