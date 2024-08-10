import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const gallerySchema = new Schema(
  {
    backgroundImage: { type: String, require: true },
    id: { type: String, require: true },
  },
  { versionKey: false }
);

gallerySchema.post("save", handleSaveError);

gallerySchema.pre("findOneAndUpdate", setUpdateSettings);

gallerySchema.post("findOneAndUpdate", handleSaveError);

const Gallery = model("image", gallerySchema);

export default Gallery;
