import ctrlWrapper from "../decorators/ctrlWrapper.js";
import addOrder from "../services/ordersServices.js";

// const get = async (req, res, next) => {
//   const order = await getOrder();
//   res.json(order);
// };

const add = async (req, res, next) => {
  const result = await addOrder(req.body);
  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
