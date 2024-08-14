import Gallery from "../models/Gallery.js";

export const getGallery = async () => Gallery.find();

export default getGallery;
