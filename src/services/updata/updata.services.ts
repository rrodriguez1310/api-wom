import { IUpdata } from "../../interface/updata.interface";
import  Updata  from "../../models/updata.models";

export class UpdataInsert {
    pasarela: IUpdata['pasarela'];
    estadoToken: IUpdata['estadoToken'];
    dispositivos: IUpdata['dispositivos'];
    material: IUpdata['material'];
    cid: IUpdata['cid'];
    fechaAlta: IUpdata['fechaAlta'];
    constructor(pasarela: IUpdata['pasarela'], estadoToken: IUpdata['estadoToken'], dispositivos: IUpdata['dispositivos'], material: IUpdata['material'], cid: IUpdata['cid'], fechaAlta: IUpdata['fechaAlta']) {
        this.pasarela = pasarela;
        this.estadoToken = estadoToken;
        this.dispositivos = dispositivos;
        this.material = material;
        this.cid = cid;
        this.fechaAlta = fechaAlta;
    }

    public async updataInsertMethod() {
        try {
         
            const updatarInsertData = new Updata({
                pasarela: this.pasarela,
                estadoToken: this.estadoToken,
                dispositivos: this.dispositivos,
                material: this.material,
                cid: this.cid,
                fechaAlta: this.fechaAlta
            })
            const save = await updatarInsertData.save();
            return save;
        } catch (error) {
            return error;
        }
    }

}

export class UpdataFindAll {
    public async updatarFindallsMethod() {
        try {
            const files = await Updata.find();
            return files;
        } catch (error) {
            return error;
        }
    }
}