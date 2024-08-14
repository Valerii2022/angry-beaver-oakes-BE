import express from "express";
import subscribeController from '../../controllers/subscribe-controller.js'

const subscribeRouter = express.Router();

subscribeRouter.post("/", subscribeController.add);

export default subscribeRouter;
