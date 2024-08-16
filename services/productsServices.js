import Product from "../models/Product.js";

const getAllProducts = async () => Product.find().sort({ id: 1 });

export default getAllProducts;
