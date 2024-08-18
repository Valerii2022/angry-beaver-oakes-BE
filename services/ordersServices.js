import Order from "../models/Order.js";

export const getOrder = async (filter) => Order.findOne(filter);

export const addOrder = async (data) => Order.create(data);

export const updateOrder = async (filter) => Order.findOneAndUpdate(filter);
