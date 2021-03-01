import Provider from "../../models/provider.model";
import { IProvider } from '../../interface/provider.interface';
import { CER_AWSBUCKET_ACCESSKEYID, CER_AWSBUCKET_SECRETACCESSKEY, CER_AWSBUCKET_REGION, CER_AWSBUCKET_NAME } from '../../constants/conf.constants';
import User from "../../models/user.model";

const AWS = require('aws-sdk');
const path = require('path');

export class ProviderInsert {
    nombre: IProvider['nombre'];
    descripcion: IProvider['descripcion'];
    imagen?: IProvider['imagen'];
    id?: IProvider['id'];
    constructor(nombre: IProvider['nombre'], descripcion: IProvider['descripcion'], imagen?: IProvider['imagen']) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    public async ProviderInsertMethod() {
        try {
         
            const providerInsertData = new Provider({
                nombre: this.nombre,
                descripcion: this.descripcion,
                estado: true
            })
            const save = await providerInsertData.save();
            if (this.imagen !== undefined) {
                const s3path = await ProviderInsert.s3Bucket(this.imagen, save._id)
                save.imagen = s3path;
            }
        
            return save;
        } catch (error) {
            return error;
        }
    }

    static async s3Bucket(image: IProvider['imagen'], id:IProvider['id'] ) {
        const s3 = new AWS.S3({
            accessKeyId: CER_AWSBUCKET_ACCESSKEYID,
            secretAccessKey: CER_AWSBUCKET_SECRETACCESSKEY,
            region: CER_AWSBUCKET_REGION
        })
        var params = {
            Bucket: CER_AWSBUCKET_NAME,
            Body: image,
            Key: 'providersAvatars/' + id +'/'+new Date().toISOString().slice(0, 10)+'/'+ Date.now() + "_" + path.basename(image)
        };
        try {
            const stored = await s3.upload(params).promise();
            let s3imagen = stored.key;
            const updateUser = await User.updateOne({ _id: id }, { imagen: '//s3.amazonaws.com/' + s3imagen });
            s3imagen = '//s3.amazonaws.com/' + s3imagen;
            return s3imagen;
        } catch (error) {
            return error;
        }
    }
}

export class ProviderFindAll {
    public async ProviderFindallsMethod() {
        try {
            const files = await Provider.find();
            return files;
        } catch (error) {
            return error;
        }
    }
}

export class ProviderFindOne {
    id: IProvider['id'];
    constructor(id: IProvider['id']) {
        this.id = id;
    }

    public async ProviderFindOneMethod() {
        try {
            const file = await Provider.findOne({ _id: this.id });
            return file;
        } catch (error) {
            return error;
        }
    }
}

export class ProviderUpdate {
    id: IProvider['id'];
    nombre: IProvider['nombre'];
    descripcion: IProvider['descripcion'];
    imagen?: IProvider['imagen'];
    constructor(id: IProvider['id'], nombre: IProvider['nombre'], descripcion: IProvider['descripcion'], imagen?: IProvider['imagen']) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    public async ProviderUpdateMethod() {
        try {
            if (this.imagen !== undefined) {
                const s3path = await ProviderInsert.s3Bucket(this.imagen, this.id)
                this.imagen = s3path;
            }

            const update = await Provider.updateOne({ _id: this.id }, { nombre: this.nombre, descripcion: this.descripcion, imagen:this.imagen });
            if (this.imagen !== undefined) {
                const s3path = await ProviderInsert.s3Bucket(this.imagen, this.id)
            }
            return update;
        } catch (error) {
            return error;
        }
    }
}


export class ProviderDelete {
    id: IProvider['id'];
    constructor(id: IProvider['id']) {
        this.id = id;
    }

    public async ProviderDeleteMethod() {
        try {
            const eraser = await Provider.updateOne({ _id: this.id }, { estado: false });
            return eraser;
        } catch (error) {
            return error;
        }
    }
}