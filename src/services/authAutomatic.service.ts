import { GenerateJwt } from '../utils/generateJwt.utils'
import { AuthServiceFindOne } from './user.service'
import { DecodeToken } from '../utils/decodeJwt.utils'
import { UserAutomaticService, UserAutomaticUpdate } from './userAutomatic.service'

export class TokenDecode {
    token: string;
    header: object;
    constructor(token: string, header: object) {
        this.token = token;
        this.header = header;
    }

    public async Decode() {
        try {
            let userAutomaticService: UserAutomaticService;
            
            userAutomaticService = new UserAutomaticService(this.token);

            const userJwt = await userAutomaticService.UserAutomatic();

            let decodeToken: DecodeToken;
            decodeToken = new DecodeToken(this.token);
            const decode = await decodeToken.Decode();

            let authServiceFindOne: AuthServiceFindOne;
            authServiceFindOne = new AuthServiceFindOne(decode.email);
            const user = await authServiceFindOne.UserFindOne()

            if (userJwt) {
                
                let jwtGenerate: GenerateJwt;
                jwtGenerate = new GenerateJwt(
                    `${user?._id}`,
                    user?.cid,
                    //decode.remember
                );

                let payload = await jwtGenerate.payload();
                if (payload) {
                    let userAutomaticUpdate: UserAutomaticUpdate;
                    userAutomaticUpdate = new UserAutomaticUpdate(user._id,this.token, payload, this.header);
                    
                    const userAutomatic = await userAutomaticUpdate.UserAutomatic();
                    
                    if (userAutomatic.n === 1) {
                        return payload
                    }
                }
            } else {
                return { status: false }
            }
        } catch (error) {
            return error
        }
    }
}