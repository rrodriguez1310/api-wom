import { Request, Response } from 'express';
import { ProductInsert, ProductFindAll, ProductFindOne, ProductUpdate, ProductDelete } from './product.services';
import { IProduct } from '../../interface/product.interface';
import { DecodeToken } from '../../utils/decodeJwt.utils';
import { ILogin } from '../../interface/login.interface';
import { ProviderInsert } from '../provider/provider.services';
import Product from '../../models/product.model';

export class ProductInsertMain {
    public async InsertMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProductInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const producto: IProduct['producto'] = req.body.producto;
                const material: IProduct['material'] = req.body.material;
                const descripcion: IProduct['descripcion'] = req.body.descripcion;
                const tipo: IProduct['tipo'] = req.body.tipo;
                const estado: IProduct['estado'] = req.body.estado;
                const proveedor: IProduct['proveedor'] = req.body.proveedor;
                const dispositivos: IProduct['dispositivos'] = req.body.dispositivos;
                const code: IProduct['code'] = req.body.code;


                let productInsert: ProductInsert;
                productInsert = new ProductInsert(producto, material, descripcion, tipo, estado, proveedor, dispositivos, code);
                productInsert.ProductInsertMethod().then(respuesta => {
                    return res.status(200).json(respuesta);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en el Ingreso del producto', error });
                })
            } else {
                return res.status(401).json({ message: 'Usted no tiene privilegios para accesar a esta area.' });
            }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
    static async verify(token: ILogin['token']) {
        try {
            let decodeToken: DecodeToken;
            decodeToken = new DecodeToken(token);
            const decode = await decodeToken.Decode();
            return decode;

        } catch (error) {
            return error;
        }
    }

}


export class ProductFindAllMain {
    public async productFindAllMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProductInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                let productFindAll: ProductFindAll;
                productFindAll = new ProductFindAll();
                productFindAll.productFindallsMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la busqueda de todos los provideres', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}



export class ProductFindOneMain {
    public async productFindOneMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProductInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const id: IProduct['id'] = req.params.id;

                let productFindOne: ProductFindOne;
                productFindOne = new ProductFindOne(id);
                productFindOne.productFindOneMethod().then(aswer => {
                    return res.status(200).json(aswer);
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la busqueda del provider.', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }

        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class ProductUpdateMain {
    public async productUpdateMainMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProductInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {
                const id: IProduct['id'] = req.params.id;
                const producto: IProduct['producto'] = req.body.producto;
                const material: IProduct['material'] = req.body.material;
                const descripcion: IProduct['descripcion'] = req.body.descripcion;
                const tipo: IProduct['tipo'] = req.body.tipo;
                const estado: IProduct['estado'] = req.body.estado;
                const proveedor: IProduct['proveedor'] = req.body.proveedor;
                const dispositivos: IProduct['dispositivos'] = req.body.dispositivos;
                const code: IProduct['code'] = req.body.code;

                let productUpdate: ProductUpdate;
                productUpdate = new ProductUpdate(id, producto, material, descripcion, tipo, estado, proveedor, dispositivos, code);
                productUpdate.productoUpdateMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro editado correctamente.' });
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en la edición del provider.', error });
                })

            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}


export class ProductDeleteMain {
    public async ProductDelteMethod(req: Request, res: Response): Promise<Response<any> | undefined> {
        try {
            const token: ILogin['token'] = req.headers.authorization || '';
            const jwtDecode = await ProductInsertMain.verify(token);
            if (jwtDecode.appId === 'appId') {

                const id: IProduct['id'] = req.params.id;

                let productDelete: ProductDelete;
                productDelete = new ProductDelete(id);
                productDelete.productDeleteMethod().then(aswer => {
                    return res.status(200).json({ message: 'Registro borrado  correctamente.' });
                }).catch((error: Error) => {
                    return res.status(401).json({ message: 'Error en borrar del provider.', error });
                })
            } else { return res.status(401).json({ message: 'No posee los privilegios para esta operacion' }) }
        } catch (error) {
            return res.status(401).json({ message: error })
        }
    }
}