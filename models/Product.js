import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

productSchema.post("save", handleSaveError);

productSchema.pre("findOneAndUpdate", setUpdateSettings);

productSchema.post("findOneAndUpdate", handleSaveError);

const Product = model("product", productSchema);

export default Product;
