import Subscribe from "../models/Subscribe.js";

const addSubscribe = async () => async (data) => Subscribe.create(data);

export default addSubscribe;
