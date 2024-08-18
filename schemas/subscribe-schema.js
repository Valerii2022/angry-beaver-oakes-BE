import Joi from "joi";
import { namePattern } from "../constants/namePattern.js";
import { emailPattern } from "../constants/emailPattern.js";

const subscribeSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(20)
    .required()
    .regex(namePattern)
    .messages({
      "any.required": `"first name" must be exist`,
      "string.min": `"first name" should have a minimum length of 3`,
      "string.max": `"first name" should have maximum length of 20`,
      "string.empty": `"first name" cannot be an empty field`,
      "string.pattern.base": `"first name" must be only latin characters.`,
    }),
  lastName: Joi.string().min(3).max(20).required().regex(namePattern).messages({
    "any.required": `"last name" must be exist`,
    "string.min": `"last name" should have a minimum length of 3`,
    "string.max": `"last name" should have maximum length of 20`,
    "string.empty": `"last name" cannot be an empty field`,
    "string.pattern.base": `"last name" must be only latin characters.`,
  }),
  email: Joi.string().required().regex(emailPattern).messages({
    "any.required": `"email" must be exist`,
    "string.empty": `"email" cannnot be an empty field`,
    "string.pattern.base": `"email" must be in format "example@example.example"`,
  }),
});

export default subscribeSchema;
