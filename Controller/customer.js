const express = require("express");
const Customer = require("../Models/Customer");
const multer = require("multer");
const Router = express.Router();
const { default: mongoose } = require("mongoose");

Router.get("/", async (req, res, next) => {
  const Customers = await Customer.find({});
  return res.json(Customers);
});
const path = require("path");

const pathUsers = path.join(__dirname + "..", "..", "Images", "users");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pathUsers);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

Router.post("/create", async (req, res, next) => {
  const Customers = await Customer.create(req.body);
  return res.json({ success: true, Customers });
});

Router.post("/edit", async (req, res, next) => {
  const cus = await Customer.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  return res.json(cus);
});
Router.post("/editWithImage", upload.single("file"), async (req, res, next) => {
  const customerData = JSON.parse(req.body.product);

  const cus = await Customer.findByIdAndUpdate(
    customerData._id,
    {
      ...customerData,
      image: path.join("Images", "users", req.file.filename),
    },
    {
      new: true,
    }
  );

  return res.json(cus);
});
Router.post("/delete", async (req, res, next) => {
  const products = await Customer.findByIdAndDelete(
    mongoose.Types.ObjectId(req.body.id)
  );
  return res.json("Deleted Successfully");
});

Router.post("/login", async (req, res, next) => {
  const Customers = await Customer.find({ email: req.body.email });
  console.log(req.body, Customers);
  if (Customers.length > 0 && Customers[0].password === req.body.password) {
    return res.json({ Customer: Customers[0], success: true });
  }
  return res.json({ msg: "invalid Username or password", success: false });
});

module.exports = Router;
