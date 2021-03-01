"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_utils_1 = __importDefault(require("./utils/middleware.utils"));
const ip_utils_1 = __importDefault(require("./utils/ip.utils"));
const auth_service_1 = require("./services/auth.service");
const userAdministration_1 = require("./services/userAdministration");
const userSelfService_1 = require("./services/userSelfService");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const doc_swagger_json_1 = __importDefault(require("./swagger-docs/doc.swagger.json"));
class Controller {
    constructor(app) {
        this.app = app;
        this.authService = new auth_service_1.AuthService();
        this.userSelfService = new userSelfService_1.UserSelfService();
        this.userAdministration = new userAdministration_1.UserAdministration();
        this.routes();
    }
    routes() {
        const router = express_1.default.Router();
        this.app.use('/api/v2', router);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve);
        this.app.route('/api-docs').get(swagger_ui_express_1.default.setup(doc_swagger_json_1.default));
        this.app.use(ip_utils_1.default);
        router.post("/auth", this.authService.Login);
        router.post("/auth/automatic", this.authService.Login);
        this.app.use(middleware_utils_1.default);
        this.app.route("/api/v2/userSelfService/editinfo").post(this.userSelfService.editinfo);
        this.app.route("/api/v2/userAdministration/list").post(this.userAdministration.list);
        this.app.route("/api/v2/userAdministration/edit").post(this.userAdministration.edit);
        this.app.route("/api/v2/userAdministration/delete").post(this.userAdministration.delete);
        this.app.route("/api/v2/userAdministration/create").post(this.userAdministration.create);
    }
}
exports.Controller = Controller;
