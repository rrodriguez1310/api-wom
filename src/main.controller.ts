import express, { Application } from "express";
import AuthMiddleware from "./utils/middleware.utils";
import ipMiddleware from "./utils/ip.utils";
import { AuthService } from './services/auth.service';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-docs/doc.swagger.json';
import {DowndataInsertMain, DowndataFindtMain  } from "../src/services/downdata/downdata";
import { UpdataInsertMain, UpdataFindtMain } from "./services/updata/updata";
import { UserInsertMain, UserFindtMain, UserFindOneMain, UserUpdateMain, UserUpdatePersonalsMain, UserrDeleteMain} from '../src/services/user/user';
import { ProviderInsertMain, ProviderFindAllMain, ProviderFindOneMain, ProviderUpdateMain, ProviderDeleteMain } from "./services/provider/provider";
import { ProductInsertMain, ProductFindOneMain, ProductFindAllMain, ProductUpdateMain, ProductDeleteMain } from './services/product/product';

export class Controller {

  private authService: AuthService;
  private updataInsertMain: UpdataInsertMain;
  private updataFindtMain: UpdataFindtMain;
  private downdataInsertMain: DowndataInsertMain;
  private downdataFindMain: DowndataFindtMain;
  private userInsertMain: UserInsertMain;
  private userFindtMain: UserFindtMain;
  private userFindOneMain: UserFindOneMain;
  private userUpdateMain: UserUpdateMain;
  private userUpdatePersonalsMain: UserUpdatePersonalsMain;
  private userrDeleteMain: UserrDeleteMain;
  private providerInsertMain: ProviderInsertMain;
  private providerFindAllMain: ProviderFindAllMain;
  private providerFindOneMain: ProviderFindOneMain;
  private providerUpdateMain: ProviderUpdateMain;
  private providerDeleteMain: ProviderDeleteMain;
  private productInsertMain: ProductInsertMain;
  private productFindAllMain: ProductFindAllMain;
  private productFindOneMain: ProductFindOneMain;
  private productUpdateMain: ProductUpdateMain;
  private productDeleteMain: ProductDeleteMain;
  
  
  
    
  constructor(private app: Application) {
    this.authService = new AuthService();
    this.updataInsertMain = new UpdataInsertMain();
    this.updataFindtMain = new UpdataFindtMain();
    this.downdataInsertMain = new DowndataInsertMain();
    this.downdataFindMain = new DowndataFindtMain();
    this.userInsertMain = new UserInsertMain();
    this.userFindtMain = new UserFindtMain();
    this.userFindOneMain = new UserFindOneMain();
    this.userUpdateMain = new UserUpdateMain();
    this.userUpdatePersonalsMain = new UserUpdatePersonalsMain();
    this.userrDeleteMain = new UserrDeleteMain();
    this.providerInsertMain = new ProviderInsertMain();
    this.providerFindAllMain = new ProviderFindAllMain();
    this.providerFindOneMain = new ProviderFindOneMain();
    this.providerUpdateMain = new ProviderUpdateMain();
    this.providerDeleteMain = new ProviderDeleteMain();
    this.productInsertMain = new ProductInsertMain();
    this.productFindAllMain = new ProductFindAllMain();
    this.productFindOneMain = new ProductFindOneMain();
    this.productUpdateMain = new ProductUpdateMain();
    this.productDeleteMain = new ProductDeleteMain();
    

    this.routes();
  }
  
  public routes() {
    const router = express.Router()
    this.app.use('/api/v2', router);
    this.app.use('/api-docs', swaggerUi.serve);
    this.app.route('/api-docs').get(swaggerUi.setup(swaggerDocument));
    this.app.use(ipMiddleware);
    //router.post("/auth", this.authService.Login);
    router.get("/auth/:company", this.authService.Login);
    router.post("/auth/automatic", this.authService.Login);

    router.post("/updata/insert", this.updataInsertMain.InsertMainMethod);
    router.get("/updata/find", this.updataFindtMain.FindallMainMethod);

    router.post("/downdata/insert", this.downdataInsertMain.InsertMainMethod);
    router.get("/downdata/find", this.downdataFindMain.FindallMainMethod);

    router.post("/user/insert", this.userInsertMain.insertMainMethod);
    router.get("/user/find", this.userFindtMain.findallMainMethod);
    router.get("/user/find/:id", this.userFindOneMain.userFindOneMainMethod);
    router.put("/user/update", this.userUpdateMain.userUpdateMainMethod);
    router.put("/user/updatepersonal/:id", this.userUpdatePersonalsMain.userUpdatePersonalsMainMethod);
    router.put("/user/delete/:id", this.userrDeleteMain.userDelteMethod);
    
    router.post("/provider/insert", this.providerInsertMain.InsertMainMethod);
    router.get("/provider/find", this.providerFindAllMain.ProviderFindAllMainMethod);
    router.get("/provider/find/:id", this.providerFindOneMain.ProviderFindOneMainMethod);
    router.put("/provider/update/:id", this.providerUpdateMain.ProviderUpdateMainMethod);
    router.put("/provider/delete/:id", this.providerDeleteMain.ProviderDelteMethod);
    
    router.post("/product/insert", this.productInsertMain.InsertMainMethod);
    router.get("/product/find/", this.productFindAllMain.productFindAllMainMethod);
    router.get("/product/find/:id", this.productFindOneMain.productFindOneMainMethod);
    router.put("/product/update/:id", this.productUpdateMain.productUpdateMainMethod);
    router.post("/product/delete/:id", this.providerDeleteMain.ProviderDelteMethod);
    this.app.use(AuthMiddleware)
    
    
  }
}
