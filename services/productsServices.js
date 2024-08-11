// import fs from "fs/promises";
// import path from "path";

import Product from "../models/Product.js";

// const productsPath = path.resolve("services", "products.json");

const getAllProducts = async () => {
  //   const products = await fs.readFile(productsPath);
  //   return JSON.parse(products);
  return Product.find();
};

export default getAllProducts;
