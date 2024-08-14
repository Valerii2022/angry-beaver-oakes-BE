import ctrlWrapper from "../decorators/ctrlWrapper.js";
import addOrder from "../services/ordersServices.js";

const add = async (req, res, next) => {
  const result = await addOrder();
  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
