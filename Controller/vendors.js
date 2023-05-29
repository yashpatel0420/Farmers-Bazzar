const express = require("express");
const Vendor = require("../Models/vendor");
const multer = require("multer");
const Router = express.Router();

const path = require("path");
const { default: mongoose } = require("mongoose");

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

Router.get("/", async (req, res, next) => {
  const vendors = await Vendor.find({});
  return res.json(vendors);
});

Router.post("/create", async (req, res, next) => {
  const vendor = await Vendor.create(req.body);
  return res.json({ success: true, vendor });
});
Router.post("/delete", async (req, res, next) => {
  const vendor = await Vendor.findByIdAndDelete(
    mongoose.Types.ObjectId(req.body.id)
  );
  return res.json("Deleted Successfully");
});

Router.post("/edit", async (req, res, next) => {
  const vendor = await Vendor.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  return res.json(vendor);
});
Router.post("/editWithImage", upload.single("file"), async (req, res, next) => {
  const vendorData = JSON.parse(req.body.product);

  const vendor = await Vendor.findByIdAndUpdate(
    vendorData._id,
    {
      ...vendorData,
      image: path.join("Images", "users", req.file.filename),
    },
    {
      new: true,
    }
  );

  return res.json(vendor);
});

Router.post("/login", async (req, res, next) => {
  const vendor = await Vendor.find({ email: req.body.email });
  // console.log("vendr", req.body, vendor);
  if (vendor.length > 0 && vendor[0].password === req.body.password) {
    return res.json({ vendor: vendor[0], success: true });
  }
  return res.json({ msg: "invalid Username or password", success: false });
});
module.exports = Router;
