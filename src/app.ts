import express, { Application } from 'express';
import { Controller } from './main.controller';
import { MONGO_URL } from './constants/conf.constants';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public app: Application;
  public appController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    this.appController = new Controller(this.app);
  }

  private setConfig() {
    //this.app.set('trust proxy', true)
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
}

export default new App().app;