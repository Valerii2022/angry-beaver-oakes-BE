import Subscribe from "../models/Subscribe.js";

const addSubscribe = async () => async (data) => Subscribe.create();

export default addSubscribe;
