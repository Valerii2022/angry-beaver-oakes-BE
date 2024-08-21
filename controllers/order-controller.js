import { nanoid } from "nanoid";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import {
  addOrder,
  getOrder,
  removeOrder,
  updateOrder,
} from "../services/ordersServices.js";

const get = async (req, res, next) => {
  const { id: _id } = req.params;
  const guestId = nanoid(10);
  const orderDetails = await getOrder({ _id });
  if (!orderDetails) {
    throw HttpError(404, `Contact with id:${id} not found.`);
  }

  res.json({ guestId, orderDetails });
};

const add = async (req, res, next) => {
  const guestId = nanoid(10);
  const request = {
    ...req.body,
    guests: [...req.body.guests, { id: guestId, guestTotal: "0" }],
  };
  const orderDetails = await addOrder(request);
  res.status(201).json({ guestId, orderDetails });
};

const update = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await updateOrder(_id, req.body);
  if (!order) {
    throw HttpError(404, `Contact with id:${_id} not found.`);
  }
  res.json(order);
};

const remove = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await removeOrder(_id);
  if (!order) {
    throw HttpError(404, `Contact with id:${_id} not found.`);
  }
  res.json(order);
};

export default {
  add: ctrlWrapper(add),
  get: ctrlWrapper(get),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
};
