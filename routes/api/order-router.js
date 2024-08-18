import express from "express";
import orderController from "../../controllers/order-controller.js";
import orderSchema from "../../schemas/order-schema.js";
import validateBody from "../../decorators/validateBody.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";

const orderRouter = express.Router();

orderRouter.get("/", orderController.get);

orderRouter.post(
  "/",
  isEmptyBody,
  validateBody(orderSchema),
  orderController.add
);

export default orderRouter;
