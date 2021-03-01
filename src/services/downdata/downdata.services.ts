import { IDowndata } from "../../interface/downdata.interface";
import  Downdata  from "../../models/downdata.models";

export class DowndataInsert {
    pasarela: IDowndata['pasarela'];
    estadoToken: IDowndata['estadoToken'];
    dispositivos: IDowndata['dispositivos'];
    material: IDowndata['material'];
    cid: IDowndata['cid'];
    fechaBaja: IDowndata['fechaBaja'];
    constructor(pasarela: IDowndata['pasarela'], estadoToken: IDowndata['estadoToken'], dispositivos: IDowndata['dispositivos'], material: IDowndata['material'], cid: IDowndata['cid'], fechaBaja: IDowndata['fechaBaja']) {
        this.pasarela = pasarela;
        this.estadoToken = estadoToken;
        this.dispositivos = dispositivos;
        this.material = material;
        this.cid = cid;
        this.fechaBaja = fechaBaja;
    }

    public async downdataInsertMethod() {
        try {
         
            const downdataInsertData = new Downdata({
                pasarela: this.pasarela,
                estadoToken: this.estadoToken,
                dispositivos: this.dispositivos,
                material: this.material,
                cid: this.cid,
                fechaBaja: this.fechaBaja
            })
            const save = await downdataInsertData.save();
            return save;
        } catch (error) {
            return error;
        }
    }

}

export class DowndataFindAll {
    public async downdatarFindallsMethod() {
        try {
            const files = await Downdata.find();
            return files;
        } catch (error) {
            return error;
        }
    }
}