import express from "express";
import orderController from "../../controllers/order-controller.js";

const orderRouter = express.Router();

orderRouter.post("/", orderController.add);

export default orderRouter;
