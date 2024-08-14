import fs from "fs/promises";
import path from "path";

// import Product from "../models/Product.js";

// const getAllProducts = async () => Product.find();

const productsPath = path.resolve("data", "products.json");

const getAllProducts = async () => {
  const products = await fs.readFile(productsPath);
  return JSON.parse(products);
};

export default getAllProducts;
