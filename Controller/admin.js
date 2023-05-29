const express = require("express");
const { default: mongoose } = require("mongoose");
const Customer = require("../Models/Customer");
const Order = require("../Models/order");
const Vendor = require("../Models/vendor");
const Product = require("../Models/products");
const Router = express.Router();
const Admin = require("../Models/admin");
Router.get("/", async (req, res, next) => {
  const vendors = await Vendor.find({}).limit(10);
  const customers = await Customer.find({}).limit(10);
  const products = await Product.find({}).limit(10);
  const orders = await Order.find({}).limit(10);
  return res.json({ vendors, customers, products, orders });
});

Router.post("/login", async (req, res, next) => {
  const admin = await Admin.find({ email: req.body.email });

  if (admin.length > 0 && admin[0].password === req.body.password) {
    return res.json({ admin: admin[0], success: true });
  }
  return res.json({ msg: "invalid Username or password", success: false });
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
