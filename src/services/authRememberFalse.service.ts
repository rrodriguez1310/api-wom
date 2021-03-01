import { GenerateJwt } from '../utils/generateJwt.utils'
import { AuthServiceFindOne } from './user.service'
// import { UserIpSave, UserIpFindOne } from './userIp.service'

export class AuthRememberFalseService {
    code: string;
    remember: boolean;
    ip: string;
    constructor(code: string, remember: boolean, ip: string) {
        this.code = code;
        this.remember = remember;
        this.ip = ip;
    }

    public async AuthCase() {
        try {
            console.log(this.code);
            console.log(this.remember);
            console.log(this.ip);
            console.log('Prue3ba');
            let authServiceFindOne: AuthServiceFindOne;
            authServiceFindOne = new AuthServiceFindOne(this.code);
            const user = await authServiceFindOne.UserFindOne()
            if(user === null){
                throw false
            }

            let jwtGenerate: GenerateJwt;
            jwtGenerate = new GenerateJwt(
                `${user?._id}`,
                `${user?.email}`,
                this.remember
            );
            let payload = await jwtGenerate.payload();
            return payload;
        } catch (err) {
            return err
        }
    }
}