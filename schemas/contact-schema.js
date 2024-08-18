import Joi from "joi";
import { namePattern } from "../constants/namePattern.js";
import { emailPattern } from "../constants/emailPattern.js";
import { phonePattern } from "../constants/phonePattern.js";

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().regex(namePattern).messages({
    "any.required": `"name" must be exist`,
    "string.min": `"name" should have a minimum length of 3`,
    "string.max": `"name" should have maximum length of 20`,
    "string.empty": `"name" cannot be an empty field`,
    "string.pattern.base": `"name" must be only latin characters.`,
  }),
  email: Joi.string().required().regex(emailPattern).messages({
    "any.required": `"email" must be exist`,
    "string.empty": `"email" cannnot be an empty field`,
    "string.pattern.base": `"email" must be in format "example@example.example"`,
  }),
  phone: Joi.string().required().regex(phonePattern).messages({
    "any.required": `"phone" must be exist`,
    "string.empty": `"phone" cannnot be an empty field`,
    "string.pattern.base": `"phone" must be in format "XXX-XXX-XXXX"`,
  }),
  message: Joi.string().required().messages({
    "any.required": `"message" must be exist`,
    "string.empty": `"message" cannnot be an empty field`,
  }),
});

export default contactSchema;
