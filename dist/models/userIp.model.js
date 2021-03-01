"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userIpSchema = new mongoose_1.Schema({
    _user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    ip: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});
const UserIp = mongoose_1.model("UserIp", userIpSchema);
exports.default = UserIp;
