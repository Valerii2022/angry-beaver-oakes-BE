import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import { addOrder, getOrder, updateOrder } from "../services/ordersServices.js";

const get = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await getOrder({ _id });
  if (!order) {
    throw HttpError(404, `Contact with id:${id} not found.`);
  }
  res.json(order);
};

const add = async (req, res, next) => {
  const result = await addOrder(req.body);
  res.status(201).json(result);
};

const update = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await updateOrder(_id, req.body);
  if (!order) {
    throw HttpError(404, `Contact with id:${_id} not found.`);
  }
  res.json(order);
};

export default {
  add: ctrlWrapper(add),
  get: ctrlWrapper(get),
  update: ctrlWrapper(update),
};
