const express = require("express");
const { default: mongoose } = require("mongoose");
const Order = require("../Models/order");
const Router = express.Router();

Router.get("/", async (req, res, next) => {
  const orders = await Order.find({});
  return res.json(orders);
});

Router.post("/create", async (req, res, next) => {
  // console.log(req.body);
  const createdOrder = await Order.create({
    ...req.body,
    customer: mongoose.Types.ObjectId(req.body.customer),
    paymentStatus: "Approved",
  });

  return res.json({ success: true, order: createdOrder });
});

Router.post("/delete", async (req, res, next) => {
  const products = await Order.findByIdAndDelete(
    mongoose.Types.ObjectId(req.body.id)
  );
  return res.json("Deleted Successfully");
});

// Router.post("/login", async (req, res, next) => {
//   const vendor = await Vendor.find({ email: req.body.email });
//   console.log("vendr", req.body, vendor);
//   if (vendor.length > 0 && vendor[0].password === req.body.password) {
//     return res.json({ vendor: vendor[0], success: true });
//   }
//   return res.json({ msg: "invalid Username or password", success: false });
// });
module.exports = Router;
