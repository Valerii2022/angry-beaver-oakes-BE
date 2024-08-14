import ctrlWrapper from "../decorators/ctrlWrapper.js";
import addSubscribe from "../services/subscribeServices.js";

const add = async (req, res, next) => {
  const result = await addSubscribe();
  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
