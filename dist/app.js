"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_controller_1 = require("./main.controller");
const conf_constants_1 = require("./constants/conf.constants");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.app = express_1.default();
        this.setConfig();
        this.setMongoConfig();
        this.appController = new main_controller_1.Controller(this.app);
    }
    setConfig() {
        //this.app.set('trust proxy', true)
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors_1.default());
    }
    setMongoConfig() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(conf_constants_1.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }
}
exports.default = new App().app;
