import Joi from "joi";

const orderSchema = Joi.object({
  deliveryAddress: Joi.string().required().messages({
    "any.required": `"deliveryAddress" must be exist`,
    "string.empty": `"deliveryAddress" cannot be an empty field`,
  }),
  limitPerGuest: Joi.string().required().messages({
    "any.required": `"limitPerGuest" must be exist`,
    "string.empty": `"limitPerGuest" cannnot be an empty field`,
  }),
  orderType: Joi.string().required().messages({
    "any.required": `"orderType" must be exist`,
    "string.empty": `"orderType" cannnot be an empty field`,
  }),
  items: Joi.array().required().messages({
    "any.required": `"items" must be exist`,
    "string.empty": `"items" cannnot be an empty field`,
  }),
  total: Joi.string().required().messages({
    "any.required": `"total" must be exist`,
    "string.empty": `"total" cannnot be an empty field`,
  }),
});

export default orderSchema;
