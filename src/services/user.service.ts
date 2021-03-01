import User from '../models/user.model';

export class AuthServiceFindOne {
    code: number;
    constructor(code: number) {
        console.log("🚀 ~ file: user.service.ts ~ line 6 ~ AuthServiceFindOne ~ constructor ~ code", code)
        this.code = code;
    }
    
    public async UserFindOne() {
        console.log(this.code)
        try {
            let user = await User.findOne({'cid': this.code}).exec();
            return user
        } catch (error) {
            return error;
        }
    }
}
