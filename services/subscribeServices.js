import Subscribe from "../models/Subscribe.js";

const addSubscribe = async (data) => Subscribe.create(data);

export default addSubscribe;
