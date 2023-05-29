const mongoose = require("mongoose");
const Products = new mongoose.Schema(
  {
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "vendor" },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    delivery: {
      shipping: { type: Boolean, required: true },
      pickUp: { type: Boolean, required: true },
      address: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Products);
