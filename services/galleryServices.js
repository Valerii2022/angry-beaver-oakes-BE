import Gallery from "../models/Gallery.js";

export const getGallery = async () => {
  const images = await Gallery.find();

  images.sort((a, b) => {
    const numA = parseInt(a.id.match(/\d+$/), 10);
    const numB = parseInt(b.id.match(/\d+$/), 10);

    if (a.id.replace(/\d+$/, "") === b.id.replace(/\d+$/, "")) {
      return numA - numB;
    } else {
      return a.id.localeCompare(b.id);
    }
  });

  return images;
};

export default getGallery;
