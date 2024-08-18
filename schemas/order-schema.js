import Joi from "joi";

const orderSchema = Joi.object({
  deliveryAddress: Joi.string().required().messages({
    "any.required": `"deliveryAddress" must be exist`,
  }),
  limitPerGuest: Joi.string().required().messages({
    "any.required": `"limitPerGuest" must be exist`,
  }),
  orderType: Joi.string().required().messages({
    "any.required": `"orderType" must be exist`,
    "string.empty": `"orderType" cannnot be an empty field`,
  }),
  items: Joi.array().required().messages({
    "any.required": `"items" must be exist`,
  }),
  total: Joi.string().required().messages({
    "any.required": `"total" must be exist`,
    "string.empty": `"total" cannnot be an empty field`,
  }),
});

export default orderSchema;
