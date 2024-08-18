import Joi from "joi";

const orderSchema = Joi.object({
  deliveryAddress: Joi.string().required().message({
    "any.required": `"deliveryAddress" must be exist`,
    "string.empty": `"deliveryAddress" cannot be an empty field`,
  }),
  orderType: Joi.string().required().messages({
    "any.required": `"orderType" must be exist`,
    "string.empty": `"orderType" cannnot be an empty field`,
  }),
  items: Joi.array().required().messages({
    "any.required": `"phone" must be exist`,
    "string.empty": `"phone" cannnot be an empty field`,
  }),
});

export default orderSchema;
