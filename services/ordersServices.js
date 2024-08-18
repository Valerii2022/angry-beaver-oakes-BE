import Order from "../models/Order.js";

// export const getOrder = async () => Order.find();

const addOrder = async (data) => Order.create(data);

export default addOrder;
