import { Request, Response } from 'express';
import { AuthRememberFalseService } from './authRememberFalse.service'
import { AuthRememberTrueService } from './authRememberTrue.service'
// import { TokenDecode } from './authAutomatic.service'
// import { ILogin } from '../interface/login.interface'
import { IAuth } from '../interface/auth.interface'
import { EvergentAuthService } from '../utils/evergentAuth.utils'

export class AuthService {
    public async Login(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const company: IAuth['company']  = req.params.company;
            console.log("🚀 ~ file: auth.service.ts ~ line 13 ~ AuthService ~ Login ~ company", company)
            const state : IAuth['state'] = req.query.state;
            console.log("🚀 ~ file: auth.service.ts ~ line 15 ~ AuthService ~ Login ~ state", state)
            const code : IAuth['code'] = req.query.code;  
            console.log("🚀 ~ file: auth.service.ts ~ line 17 ~ AuthService ~ Login ~ code", code)

            switch (company) { 
                case 'wom':  
                    let evergentAuthService: EvergentAuthService;
                    evergentAuthService = new EvergentAuthService(company, state, code);
                    const statusCustomerEvergent = await evergentAuthService.AuthJwt();
                    
                    if(statusCustomerEvergent.error === true){
                        res.status(400).json(statusCustomerEvergent.message)
                    }
                    return res.status(200).json(statusCustomerEvergent)
                    
                    // if(statusCustomerEvergent == 'Error: invalid_grant'){
                    //     throw new Error(statusCustomerEvergent)
                    // }

                    // let authRememberFalseService: AuthRememberFalseService;
                    // authRememberFalseService = new AuthRememberFalseService(code, remember, ip);
                    // authRememberFalseService.AuthCase().then(jwt => {
                    //     if(jwt === false ){
                    //         return res.status(400).json({ message: 'Ocurrio un problema, intentalo nuevamente' });
                    //     }else{
                    //         return res.status(200).json(jwt);
                    //     }
                    // }).catch((err:Error) => {
                    //     return res.status(400).json({ message: err });
                    // })
                    break;
                case 'cc':
                    console.log(2)
                    // let authRememberTrueService: AuthRememberTrueService;
                    // authRememberTrueService = new AuthRememberTrueService(code, remember, header);
                    // authRememberTrueService.AuthCase().then(jwt => {
                    //     if(jwt === false ){
                    //         return res.status(400).json({ message: 'Ocurrio un problema, intentalo nuevamente' });
                    //     }else{
                    //         return res.status(200).json(jwt);
                    //     }
                    // }).catch((err: Error) => {
                    //     return res.status(401).json({ message: err });
                    // })
                    break;
                default:
                    console.log(3)
                    // let authAutomaticService: TokenDecode;
                    // authAutomaticService = new TokenDecode(token, header);
                    // authAutomaticService.Decode().then((v): Response<any> => {
                    //     console.log(v.status)
                    //     if (v.status === false) {
                    //         throw new Error('El cliente no tiene un acceso automatico activo');
                    //     } else {
                    //         return res.status(200).json(v)
                    //     }
                    // }).catch((err: Error) => {
                    //     return res.status(401).json({ message: err.message })
                    // })

                    break;
            }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}