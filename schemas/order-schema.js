import Joi from "joi";
import { namePattern } from "../constants/namePattern.js";

export const createOrderSchema = Joi.object({
  deliveryAddress: Joi.string().required().messages({
    "any.required": `"deliveryAddress" must be exist`,
    "string.empty": `"deliveryAddress" cannot be an empty field`,
  }),
  limitPerGuest: Joi.string().required().messages({
    "any.required": `"limitPerGuest" must be exist`,
    "string.empty": `"limitPerGuest" cannnot be an empty field`,
  }),
  orderType: Joi.string().valid("delivery", "carryout").required().messages({
    "any.required": `"orderType" must be exist`,
    "string.empty": `"orderType" cannnot be an empty field`,
    "any.only": `"orderType" must be one of [delivery, carryout]`,
  }),
  items: Joi.array().required().messages({
    "any.required": `"items" must be exist`,
    "string.empty": `"items" cannnot be an empty field`,
  }),
  total: Joi.string().required().messages({
    "any.required": `"total" must be exist`,
    "string.empty": `"total" cannnot be an empty field`,
  }),
  guests: Joi.array().required().messages({
    "any.required": `"guests" must be exist`,
    "string.empty": `"guests" cannnot be an empty field`,
  }),
  status: Joi.string().valid("pending", "done").required().messages({
    "any.required": `"status" must be exist`,
    "string.empty": `"status" cannnot be an empty field`,
    "any.only": `"status" must be one of [pending, done]`,
  }),
});

export const updateOrderSchema = Joi.object({
  deliveryAddress: Joi.string(),
  limitPerGuest: Joi.string(),
  orderType: Joi.string(),
  items: Joi.array(),
  guests: Joi.array(),
  total: Joi.number(),
  status: Joi.string(),
});

export const addedItemsOrderSchema = Joi.object({
  item: Joi.object({
    id: Joi.string().required().messages({
      "any.required": `"id" must be exist`,
      "string.empty": `"id" cannnot be an empty field`,
    }),
    title: Joi.string().required().messages({
      "any.required": `"title" must be exist`,
      "string.empty": `"title" cannnot be an empty field`,
    }),
    quantity: Joi.number().required().messages({
      "any.required": `"quantity" must be exist`,
      "number.empty": `"quantity" cannnot be an empty field`,
    }),
    price: Joi.number().required().messages({
      "any.required": `"price" must be exist`,
      "number.empty": `"price" cannnot be an empty field`,
    }),
    instructions: Joi.string(),
    guestName: Joi.string(),
    guestId: Joi.string().required().messages({
      "any.required": `"guestId" must be exist`,
      "string.empty": `"guestId" cannnot be an empty field`,
    }),
  }),
});

export const addGuestOrderSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().regex(namePattern).messages({
    "any.required": `"name" must be exist`,
    "string.min": `"name" should have a minimum length of 3`,
    "string.max": `"name" should have maximum length of 20`,
    "string.empty": `"name" cannot be an empty field`,
    "string.pattern.base": `"name" must be only latin characters.`,
  }),
});
