"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const conf_constants_1 = require("./constants/conf.constants");
app_1.default.listen(conf_constants_1.PORT, () => console.log(`Listening on port ${conf_constants_1.PORT}`));
