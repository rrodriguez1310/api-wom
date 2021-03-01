import { GenerateJwt } from '../utils/generateJwt.utils'
import { AuthServiceFindOne } from './user.service'
import { UserAutomaticSave, UserAutomaticUpdate, UserAutomaticFindUserId } from './userAutomatic.service'

export class AuthRememberTrueService {

    code: string;
    remember: boolean;
    header: object;

    constructor(code: string, remember: boolean, header: object) {
        this.code = code;
        this.remember = remember;
        this.header = header;
    }
    public async AuthCase() {
        try {
            let authServiceFindOne: AuthServiceFindOne;
            authServiceFindOne = new AuthServiceFindOne(this.code);
            const user = await authServiceFindOne.UserFindOne()

            let userAutomaticFindUserId: UserAutomaticFindUserId;
            userAutomaticFindUserId = new UserAutomaticFindUserId(user?._id);
            const existRegisterUser  = await userAutomaticFindUserId.FindUserID()
            console.log("🚀 ~ file: authRememberTrue.service.ts ~ line 25 ~ AuthRememberTrueService ~ AuthCase ~ existRegisterUser", existRegisterUser)
            if(existRegisterUser === null){
                throw false
            }
            let jwtGenerate: GenerateJwt;
            jwtGenerate = new GenerateJwt(`${user?._id}`, `${user?.email}`, this.remember);
            let payload = await jwtGenerate.payload();
            
            let userAutomaticSave: UserAutomaticSave;
            let date = new Date();
            userAutomaticSave = new UserAutomaticSave(user?._id, this.header, payload, date)

            if(existRegisterUser !== null){
                let userAutomaticUpdate: UserAutomaticUpdate;
                userAutomaticUpdate = new UserAutomaticUpdate(user._id, existRegisterUser.jwt, payload, this.header);
                const userAutomatic = await userAutomaticUpdate.UserAutomatic();
                if (userAutomatic.n === 1) {
                    return payload
                }
            }else{
               let save = await userAutomaticSave.save()
               return payload;
            }
        } catch (err) {
            return err
        }

    }
}