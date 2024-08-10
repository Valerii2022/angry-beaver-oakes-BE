import express from "express";
import galleryController from "../../controllers/gallery-controller.js";

const galleryRouter = express.Router();

galleryRouter.get("/", galleryController.getImages);

export default galleryRouter;
