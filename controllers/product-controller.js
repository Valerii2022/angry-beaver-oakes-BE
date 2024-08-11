import ctrlWrapper from "../decorators/ctrlWrapper.js";
import getAllProducts from "../services/productsServices.js";

const getProducts = async (req, res, next) => {
  const products = await getAllProducts();
  res.json(products);
};

export default {
  getProducts: ctrlWrapper(getProducts),
};
