import Subscribe from "../models/Subscribe";

const addSubscribe = async () => async (data) => Subscribe.create();

export default addSubscribe;
