import UserIpModel from '../models/userIp.model';
import { ISaveIp } from '../interface/saveIp.interface' 

export class UserIpSave {
    
    _user: ISaveIp['_user'];
    ip: ISaveIp['ip'];
    count: ISaveIp['count'];
    created: ISaveIp['created'];

    constructor(_user: ISaveIp['_user'], ip: ISaveIp['ip'], count: ISaveIp['count'], created: ISaveIp['created']) {
        this._user = _user;
        this.ip = ip;
        this.count = count;
        this.created = created;
    }

    public async UserIpSave() {
        try {
            const userIpModel = new UserIpModel({
                _user: this._user ,
                ip: this.ip,
                count: this.count,
                created: this.created
            })
            return userIpModel;
        } catch (error) {
            return error;
        }
    }
}

export class UserIpFindOne {
    ip: ISaveIp['ip'];
    constructor( ip: ISaveIp['ip']) {
        this.ip = ip;
    }
    public async UserIpFindOne() {
        try {
            let findUserIp = await UserIpModel.findOne({ ip: this.ip }).exec();
            return findUserIp;
        } catch (error) {
            return error;
        }
    }
}