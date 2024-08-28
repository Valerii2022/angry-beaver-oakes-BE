import ctrlWrapper from "../decorators/ctrlWrapper.js";
import sendEmail from "../helpers/sendEmail.js";
import addSubscribe from "../services/subscribeServices.js";

const add = async (req, res, next) => {
  const { email } = req.body;

  const result = await addSubscribe(req.body);

  const contactEmail = {
    to: email,
    subject: "Verify email",
    html: `<p>It is my testing (pet project) website!</p><p>Thank you for your subscribe!</p><p>With best wishes, Angry Beaver Lodge!</p>`,
  };

  await sendEmail(contactEmail);

  res.status(201).json(result);
};

export default {
  add: ctrlWrapper(add),
};
