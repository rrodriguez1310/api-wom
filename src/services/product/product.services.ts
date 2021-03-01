import Product from '../../models/product.model';
import { IProduct } from '../../interface/product.interface';

export class ProductInsert {
    producto: IProduct['producto'];
    material: IProduct['material'];
    descripcion: IProduct['descripcion'];
    tipo: IProduct['tipo'];
    estado: IProduct['estado'];
    proveedor: IProduct['proveedor'];
    dispositivos: IProduct['dispositivos'];
    code: IProduct['code'];



    constructor(producto: IProduct['producto'], material: IProduct['material'], descripcion: IProduct['descripcion'], tipo: IProduct['tipo'], estado: IProduct['estado'], proveedor: IProduct['proveedor'], dispositivos: IProduct['dispositivos'], code: IProduct['code']) {
        this.producto = producto;
        this.material = material;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.estado = estado;
        this.proveedor = proveedor;
        this.dispositivos = dispositivos;
        this.code = code;
    }

    public async ProductInsertMethod() {

        try {

            const productInsertData = new Product({
                producto: this.producto,
                material: this.material,
                descripcion: this.descripcion,
                tipo: this.tipo,
                estado: true,
                proveedor: this.proveedor,
                dispositivos: this.dispositivos,
                code: this.code

            })

            //console.log('data', proveedorInsertData);
            /*             proveedorInsertData.save(function(err) {
                            if (err) console.log(err) // Mod on _id not allowed on { name: 'city',
                        }) */
            const save = await productInsertData.save();
            return save;
        } catch (error) {
            return error;
        }
    }


}

export class ProductFindAll {
    public async productFindallsMethod() {
        try {
            const files = await Product.find();
            return files;
        } catch (error) {
            return error;
        }
    }
}

export class ProductFindOne {
    id: IProduct['id'];
    constructor(id: IProduct['id']) {
        this.id = id;
    }

    public async productFindOneMethod() {
        try {
            const file = await Product.findOne({ _id: this.id });
            return file;
        } catch (error) {
            return error;
        }
    }
}



export class ProductUpdate {
    id: IProduct['id'];
    producto: IProduct['producto'];
    material: IProduct['material'];
    descripcion: IProduct['descripcion'];
    tipo: IProduct['tipo'];
    estado: IProduct['estado'];
    proveedor: IProduct['proveedor'];
    dispositivos: IProduct['dispositivos'];
    code: IProduct['code'];
    constructor(id: IProduct['id'], producto: IProduct['producto'], material: IProduct['material'], descripcion: IProduct['descripcion'], tipo: IProduct['tipo'], estado: IProduct['estado'], proveedor: IProduct['proveedor'], dispositivos: IProduct['dispositivos'], code: IProduct['code']) {
        this.id = id;
        this.producto = producto;
        this.material = material;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.estado = estado;
        this.proveedor = proveedor;
        this.dispositivos = dispositivos;
        this.code = code;

    }

    public async productoUpdateMethod() {
        try {
            const update = await Product.updateOne({ _id: this.id }, { producto: this.producto, material: this.material, descripcion: this.descripcion, tipo: this.tipo, estado: this.estado, proveedor: this.proveedor, dispositivos: this.dispositivos, code: this.code });
            return update;
        } catch (error) {
            return error;
        }
    }
}
export class ProductDelete {
    id: IProduct['id'];
    constructor(id: IProduct['id']) {
        this.id = id;
    }

    public async productDeleteMethod() {
        try {
            const eraser = await Product.updateOne({ _id: this.id }, { estado: false });
            return eraser;
        } catch (error) {
            return error;
        }
    }
}