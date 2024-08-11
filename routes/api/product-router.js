import express from "express";
import productController from "../../controllers/product-controller.js";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

export default productRouter;
