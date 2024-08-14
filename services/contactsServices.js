import { nanoid } from "nanoid";
import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("data", "contacts.json");

const updateContacts = (contacts) => {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const getContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const addContact = async ({ name, email, phone, message }) => {
  const contacts = await getContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
    message,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};


export default addContact;
