import express from "express";
import subscribeController from "../../controllers/subscribe-controller.js";
import subscribeSchema from "../../schemas/subscribe-schema.js";
import validateBody from "../../decorators/validateBody.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";

const subscribeRouter = express.Router();

subscribeRouter.post(
  "/",
  isEmptyBody,
  validateBody(subscribeSchema),
  subscribeController.add
);

export default subscribeRouter;
