import express from "express";
import contactController from "../../controllers/contact-controller.js";
import contactSchema from "../../schemas/contact-schema.js";
import validateBody from "../../decorators/validateBody.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";

const contactRouter = express.Router();

contactRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactSchema),
  contactController.add
);

export default contactRouter;
