const mongoose = require("mongoose");
const Orders = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cartItems: { type: Array },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    delivery: { type: String, required: true },
    amount: {
      shipping: { type: Number },
      cart: { type: Number, required: true },
    },
    geo: {
      distance: { type: String },
      time: { type: String },
    },
    paymentStatus: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", Orders);
