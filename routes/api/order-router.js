import express from "express";
import orderController from "../../controllers/order-controller.js";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../../schemas/order-schema.js";
import validateBody from "../../decorators/validateBody.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import isValidId from "../../middlewares/isValidId.js";

const orderRouter = express.Router();

orderRouter.get("/:id", orderController.get);

orderRouter.post(
  "/",
  isEmptyBody,
  validateBody(createOrderSchema),
  orderController.add
);

orderRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(updateOrderSchema),
  orderController.update
);

export default orderRouter;
