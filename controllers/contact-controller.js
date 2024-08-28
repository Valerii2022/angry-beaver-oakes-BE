import ctrlWrapper from "../decorators/ctrlWrapper.js";
import sendEmail from "../helpers/sendEmail.js";
import addContact from "../services/contactsServices.js";

const add = async (req, res, next) => {
  const { email } = req.body;

  const result = await addContact(req.body);

  const contactEmail = {
    to: email,
    subject: "Verify email",
    html: `<p>It is my testing (pet project) website!</p><p>Thank you for your message!</p>`,
  };

  await sendEmail(contactEmail);

  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
