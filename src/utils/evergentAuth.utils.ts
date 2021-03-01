import fetch from 'node-fetch';
import jwt, { decode } from 'jsonwebtoken';
import moment from 'moment';
import { IAuth } from '../interface/auth.interface'
import { COMPANIES } from '../constants/conf.constants';
import { AuthServiceFindOne } from '../services/user.service'
import { GenerateJwt } from '../utils/generateJwt.utils'
export class EvergentAuthService {
    company: IAuth['company'];
    state: IAuth['state'];
    code: IAuth['code'];

    constructor(company: IAuth['company'], state: IAuth['state'], code: IAuth['code']) {
        this.company = company;
        this.state = state;
        this.code = code;
    }

    public async AuthJwt() {
        try {
            const url = COMPANIES.filter(v => v.company == this.company);
            const urlFormet = `${url[0].url}?grant_type=${url[0].grant_type}&code=${this.code}&client_id=${url[0].client_id}&client_secret=${url[0].client_secret}`
            const response = await fetch(urlFormet, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' }
            });

            const responseJson = await response.json();

            const decoded: any = jwt.decode(responseJson.access_token);

            if (decoded === null) {
                throw ({ error: true, message: 'No se puedo generar el token' })
            }

            const exp: number = decoded.exp
            let milliseconds = exp * 1000
            let date = new Date(milliseconds)
            let dateJwt = moment(date)
            let dateNow = moment()
            let diffe = dateJwt.diff(dateNow, 'seconds')
            const statusJwt = diffe > 0 ? true : false;

            const cid: number = decoded.cid

            if (responseJson.access_token) {
                let authServiceFindOne: AuthServiceFindOne;
                authServiceFindOne = new AuthServiceFindOne(cid);
                const userStatus = await authServiceFindOne.UserFindOne();
                if (userStatus._id) {
                    let jwtGenerate: GenerateJwt;
                    jwtGenerate = new GenerateJwt(
                        `${userStatus?._id}`,
                        userStatus?.cid
                    );

                    let payload = await jwtGenerate.payload();
                    return payload
                }
            }

            if (statusJwt === false) {
                throw ({ error: true, message: 'El token expiro' })
            }

            if (responseJson.GetOAuthAccessTokenResponseMessage.error == 'invalid_grant') {
                throw ({ error: true, message: 'Ocurrio un problema' })
            }

        } catch (e) {
            return e
        }
    }
}