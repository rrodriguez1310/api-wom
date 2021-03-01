import Usersautomatico from '../models/usersautomatico.model';
import { IUserAutomatic } from '../interface/userAutomatic.interface'

export class UserAutomaticService {
    token: string;
    constructor(token: string) {
        this.token = token;
    }

    public async UserAutomatic() {
        try {
            let usersautomatico = await Usersautomatico.findOne({ jwt: this.token }, 'jwt').exec();
            return usersautomatico;
        } catch (error) {
            return error;
        }
    }
}

export class UserAutomaticUpdate {
    _user: IUserAutomatic['_user'];

    tokenOld: string;
    tokenNew: string;
    header: object;
    constructor(_user: IUserAutomatic['_user'], tokenOld: string, tokenNew: string, header: object) {
        this._user = _user
        this.tokenOld = tokenOld;
        this.tokenNew = tokenNew
        this.header = header;
    }

    public async UserAutomatic() {
        try {
            const update = await Usersautomatico.updateOne({ jwt: this.tokenOld }, { jwt: this.tokenNew, cabecera: this.header });
            return update
        } catch (error) {
            return error;
        }
    }
}

export class UserAutomaticSave {

    _user: IUserAutomatic['_user'];
    cabecera: IUserAutomatic['cabecera'];
    jwt: IUserAutomatic['jwt'];
    fecha: IUserAutomatic['fecha']

    constructor(_user: IUserAutomatic['_user'], cabecera: IUserAutomatic['cabecera'], jwt: IUserAutomatic['jwt'], fecha: IUserAutomatic['fecha']) {
        this._user = _user;
        this.cabecera = cabecera
        this.jwt = jwt;
        this.fecha =fecha;
    }

    public async save() {
        try {
            const userAutomaticData = new Usersautomatico({
                _user: this._user,
                cabecera: this.cabecera,
                jwt: this.jwt,
                fecha: this.fecha
            })

            const save = await userAutomaticData.save();
            return save;

        } catch (error) {
            return error;
        }
    }
}

export class UserAutomaticFindUserId {

    _user: IUserAutomatic['_user'];
    constructor(_user:IUserAutomatic['_user']) {
        this._user = _user;
    }

    public async FindUserID() {
        try {
            let usersautomatico = await Usersautomatico.findOne({ _user: this._user }).exec();
            console.log(usersautomatico)
            return usersautomatico;
        } catch (error) {
            return error;
        }
    }
}

