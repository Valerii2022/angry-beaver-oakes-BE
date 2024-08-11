import getGallery from "../services/galleryServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getImages = async (req, res, next) => {
  const images = await getGallery();
  res.json(images);
};

export default {
  getImages: ctrlWrapper(getImages),
};
