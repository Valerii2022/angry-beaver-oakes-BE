import Product from "../models/Product.js";

const getAllProducts = async () => Product.find();

export default getAllProducts;
