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
  const orderDetails = await getOrder({ _id });
  if (!orderDetails) {
    throw HttpError(404, `Order with id:${id} not found.`);
  }
  res.json(orderDetails);
};

const getGuests = async (req, res, next) => {
  const { id: _id } = req.params;
  const guestId = nanoid(10);
  const guestName = req.body.name;
  const orderDetails = await getOrder({ _id });
  if (!orderDetails) {
    throw HttpError(404, `Order with id:${id} not found.`);
  }
  const guests = [
    ...orderDetails.guests,
    { id: guestId, guestTotal: 0, guestName: guestName },
  ];
  const result = await await updateOrder(_id, { guests });
  res.json({ guestName, guestId, result });
};

const add = async (req, res, next) => {
  const guestId = nanoid(10);
  const request = {
    ...req.body,
    guests: [...req.body.guests, { id: guestId, guestTotal: 0 }],
  };
  const orderDetails = await addOrder(request);
  res.status(201).json({ guestId, orderDetails });
};

const update = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await updateOrder(_id, req.body);
  if (!order) {
    throw HttpError(404, `Order with id:${_id} not found.`);
  }
  res.json(order);
};

const updateItems = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await getOrder({ _id });
  if (!order) {
    throw HttpError(404, `Order with id:${_id} not found.`);
  }
  const newItems = req.body.items.filter(
    (newItem) =>
      !order.items.some((existingItem) => existingItem.id === newItem.id)
  );
  const items = [...order.items, ...newItems];
  const updatedOrder = await updateOrder(_id, { ...req.body, items: items });

  res.json(updatedOrder);
};

const removeItems = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await getOrder({ _id });
  if (!order) {
    throw HttpError(404, `Order with id:${_id} not found.`);
  }
  const items = order.items.filter((el) => el.id !== req.body.id);
  const updatedOrder = await updateOrder(_id, {
    items: items,
    total: req.body.total,
    guests: req.body.guests,
  });
  res.json(updatedOrder);
};

const remove = async (req, res, next) => {
  const { id: _id } = req.params;
  const order = await removeOrder(_id);
  if (!order) {
    throw HttpError(404, `Order with id:${_id} not found.`);
  }
  res.json(order);
};

export default {
  add: ctrlWrapper(add),
  get: ctrlWrapper(get),
  getGuests: ctrlWrapper(getGuests),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
  updateItems: ctrlWrapper(updateItems),
  removeItems: ctrlWrapper(removeItems),
};
