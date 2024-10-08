import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const orderSchema = new Schema(
  {
    deliveryAddress: {
      type: String,
      required: true,
    },
    limitPerGuest: {
      type: String,
      required: true,
    },
    orderType: {
      type: String,
      required: true,
      enum: ["delivery", "carryout"],
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "done"],
    },
    items: { type: Array, required: true },
    guests: { type: Array, required: true },
    total: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

orderSchema.post("save", handleSaveError);

orderSchema.pre("findOneAndUpdate", setUpdateSettings);

orderSchema.post("findOneAndUpdate", handleSaveError);

const Order = model("order", orderSchema);

export default Order;
