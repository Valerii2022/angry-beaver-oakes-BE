import fs from "fs/promises";
import path from "path";

const productsPath = path.resolve("services", "products.json");

const getAllProducts = async () => {
  const products = await fs.readFile(productsPath);
  return JSON.parse(products);
};

export default getAllProducts;
