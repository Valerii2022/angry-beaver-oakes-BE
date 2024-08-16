import Gallery from "../models/Gallery.js";

export const getGallery = async () => Gallery.find().sort({ id: 1 });

export default getGallery;
