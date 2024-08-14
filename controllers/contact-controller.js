import ctrlWrapper from "../decorators/ctrlWrapper.js";
import addContact from "../services/contactsServices.js";

const add = async (req, res, next) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
