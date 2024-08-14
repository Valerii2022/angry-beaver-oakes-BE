// import { nanoid } from "nanoid";
// import fs from "fs/promises";
import Contact from "../models/Contact.js";
// import path from "path";

// const contactsPath = path.resolve("data", "contacts.json");

// const updateContacts = (contacts) => Contact.findOneAndUpdate(contacts);
// fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// const getContacts = async () => Contact.find();
// const data = await fs.readFile(contactsPath);
// return JSON.parse(data);

// const addContact = async ({ name, email, phone, message }) => {
//   const contacts = await getContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//     message,
//   };
//   contacts.push(newContact);
//   await updateContacts(contacts);
//   return newContact;
// };

const addContact = async (data) => Contact.create(data);

export default addContact;
