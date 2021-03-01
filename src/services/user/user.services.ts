import { IUser } from "../../interface/user.interface";
import User from "../../models/user.model";



export class UserInsert {
    pasarela: IUser['pasarela'];
    estadoToken: IUser['estadoToken'];
    dispositivos: IUser['dispositivos'];
    material: IUser['material'];
    cid: IUser['cid'];


    constructor(pasarela: IUser['pasarela'], estadoToken: IUser['estadoToken'], dispositivos: IUser['dispositivos'], material: IUser['material'], cid: IUser['cid']) {
        this.pasarela = pasarela;
        this.estadoToken = estadoToken;
        this.dispositivos = dispositivos;
        this.material = material;
        this.cid = cid;
  
       
    }

    public async userInsertMethod() {
        try {
            const serInsertData = new User({
                pasarela: this.pasarela,
                estadoToken: this.estadoToken,
                dispositivos: this.dispositivos,
                material: this.material,
                cid: this.cid,
                estado: true,
                datosPersonales: false

            })
            const save = await serInsertData.save();
            return save;
        } catch (error) {
            return error;
        }
    }

}

export class UserFindAll {
    public async userFindallsMethod() {
        try {
            const files = await User.find();
            return files;
        } catch (error) {
            return error;
        }
    }
}

export class UserFindOne {
    id: IUser['id'];
    constructor(id: IUser['id']) {
        this.id = id;
    }

    public async userFindOneMethod() {
        try {
            const file = await User.findOne({ _id: this.id });
            return file;
        } catch (error) {
            return error;
        }
    }
}

export class UserUpdate {
    pasarela: IUser['pasarela'];
    estadoToken: IUser['estadoToken'];
    dispositivos: IUser['dispositivos'];
    material: IUser['material'];
    cid: IUser['cid'];
 

    constructor(pasarela: IUser['pasarela'], estadoToken: IUser['estadoToken'], dispositivos: IUser['dispositivos'], material: IUser['material'], cid: IUser['cid']) {
        this.pasarela = pasarela;
        this.estadoToken = estadoToken;
        this.dispositivos = dispositivos;
        this.material = material;
        this.cid = cid;
    }

    public async userUpdateMethod() {
        try {
       
            const update = await User.updateOne({ cid: this.cid }, { pasarela: this.pasarela, estadoToken: this.estadoToken, dispositivos: this.dispositivos, material: this.material },{upsert:true});
            return update;
        } catch (error) {
            return error;
        }
    }

}

export class UserUpdatePersonals {
    id: IUser['id'];
    email: IUser['email'];
    nombre: IUser['nombre'];
    apellidos: IUser['apellidos'];
    fechaNacimiento: IUser['fechaNacimiento'];
    genero: IUser['genero'];
    tipo: IUser['tipo'];
    telefono: IUser['telefono'];
    equipo: IUser['equipo'];
    pais: IUser['pais'];
    rut: IUser['rut'];


    constructor(id: IUser['id'], email: IUser['email'], nombre: IUser['nombre'], apellidos: IUser['apellidos'], fechaNacimiento: IUser['fechaNacimiento'], genero: IUser['genero'],
        tipo: IUser['tipo'], telefono: IUser['telefono'], equipo: IUser['equipo'], pais: IUser['pais'], rut: IUser['rut'])
    {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.tipo = tipo;
        this.telefono = telefono;
        this.equipo = equipo;
        this.pais = pais;
        this.rut = rut;

    }

    public async userUpdatePersonalsMethod() {
        try {
            const update = await User.updateOne({ _id: this.id }, {
                email: this.email, nombre: this.nombre, apellidos: this.apellidos, fechaNacimiento: this.fechaNacimiento,
                genero: this.genero, tipo: this.tipo, telefono: this.telefono, equipo: this.equipo, pais: this.pais, rut: this.rut, datosPersonales: true
            });
            return update;
        } catch (error) {
            return error;
        }
    }

}

export class UserDelete {
    id: IUser['id'];
    constructor(id: IUser['id']) {
        this.id = id;
    }

    public async userDeleteMethod() {
        try {
            const eraser = await User.updateOne({ _id: this.id }, { estado: false });
            return eraser;
        } catch (error) {
            return error;
        }
    }
}