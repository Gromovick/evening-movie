import mongoose from "mongoose";
import { token } from "morgan";

const TokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Token", TokenSchema);
