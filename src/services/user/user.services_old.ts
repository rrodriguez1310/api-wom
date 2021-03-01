import { IUser } from "../../interface/user.interface";
import User from "../../models/user.model";



export class UserInsert {
    pasarela: IUser['pasarela'];
    estadoToken: IUser['estadoToken'];
    dispositivos: IUser['dispositivos'];
    material: IUser['material'];
    cid: IUser['cid'];
    estado: IUser['estado'];
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
    datosPersonales: IUser['datosPersonales'];

    constructor(pasarela: IUser['pasarela'], estadoToken: IUser['estadoToken'], dispositivos: IUser['dispositivos'], material: IUser['material'], cid: IUser['cid'], estado: IUser['estado'], email: IUser['email'], nombre: IUser['nombre'], apellidos: IUser['apellidos'], fechaNacimiento: IUser['fechaNacimiento'], genero: IUser['genero'], tipo: IUser['tipo'], telefono: IUser['telefono'], equipo: IUser['equipo'], pais: IUser['pais'], rut: IUser['rut'],datosPersonales: IUser['datosPersonales'] ) {
        this.pasarela = pasarela;
        this.estadoToken = estadoToken;
        this.dispositivos = dispositivos;
        this.material = material;
        this.cid = cid;
        this.estado = estado;
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
        this.datosPersonales = datosPersonales;


    }

    public async userInsertMethod() {
        try {

            const downdataInsertData = new User({
                pasarela: this.pasarela,
                estadoToken: this.estadoToken,
                dispositivos: this.dispositivos,
                material: this.material,
                cid: this.cid,
                estado: this.estado,
                email: this.email,
                nombre: this.nombre,
                apellidos: this.apellidos,
                fechaNacimiento: this.fechaNacimiento,
                genero: this.genero,
                tipo: this.tipo,
                telefono: this.telefono,
                equipo: this.equipo,
                pais: this.pais,
                rut: this.rut

            })
            const save = await downdataInsertData.save();
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