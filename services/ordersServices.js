import Order from "../models/Order.js";

export const getOrder = async (id) => Order.findOne(id);

export const addOrder = async (data) => Order.create(data);

export const updateOrder = async (id, data) =>
  Order.findByIdAndUpdate(id, data);

export const removeOrder = async (id) => Order.findByIdAndDelete(id);
