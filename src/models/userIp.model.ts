import { Document, Model, model, Schema } from "mongoose";
import {ISaveIp} from "../interface/saveIp.interface";


const userIpSchema: Schema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
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

const UserIp: Model<ISaveIp> = model("UserIp", userIpSchema);

export default UserIp;

