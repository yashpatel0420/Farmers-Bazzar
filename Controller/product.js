const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("../Models/products");
const Router = express.Router();
const multer = require("multer");
const path = require("path");

const pathProducts = path.join(__dirname + "..", "..", "Images", "products");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pathProducts);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

Router.get("/", async (req, res, next) => {
  const products = await Product.find({});
  return res.json(products);
});

Router.post("/findById", async (req, res, next) => {
  const products = await Product.findById(mongoose.Types.ObjectId(req.body.id));
  return res.json(products);
});
Router.post("/delete", async (req, res, next) => {
  const products = await Product.findByIdAndDelete(
    mongoose.Types.ObjectId(req.body.id)
  );
  return res.json("Deleted Successfully");
});

Router.post("/create", upload.single("file"), async (req, res, next) => {
  const productData = JSON.parse(req.body.product);

  const product = await Product.create({
    ...productData,
    image: path.join("Images", "products", req.file.filename),
  });

  return res.json({ success: true, product });
});

Router.post("/productsByVendor", async (req, res, next) => {
  const products = await Product.find({
    vendor: mongoose.Types.ObjectId(req.body.id),
  });
  // console.log(products);
  return res.json(products);
});

// Router.post("/login", async (req, res, next) => {
//   const vendor = await Vendor.find({ email: req.body.email });
//   if (vendor.length > 0 && vendor[0].password === req.body.password) {
//     return res.json({ vendor: vendor[0], success: true });
//   }
//   return res.json({ msg: "invalid Username or password", success: false });
// });
module.exports = Router;
