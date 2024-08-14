import fs from "fs/promises";
import path from "path";
// import Gallery from "../models/Gallery.js";

// export const getGallery = async () => Gallery.find();

const galleryPath = path.resolve("data", "gallery.json");

const getGallery = async () => {
  const gallery = await fs.readFile(galleryPath);
  return JSON.parse(gallery);
};

export default getGallery;
