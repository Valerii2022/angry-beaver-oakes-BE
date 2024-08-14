import Contact from "../models/Contact.js";

export const addContact = async (data) => Contact.create(data);

export default addContact;
