import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const subscribeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

subscribeSchema.post("save", handleSaveError);

subscribeSchema.pre("findOneAndUpdate", setUpdateSettings);

subscribeSchema.post("findOneAndUpdate", handleSaveError);

const Subscribe = model("subscribe", subscribeSchema);

export default Subscribe;
