import Order from "../models/Order.js";

export const getOrder = async () => Order.find();

export const addOrder = async (data) => Order.create(data);


