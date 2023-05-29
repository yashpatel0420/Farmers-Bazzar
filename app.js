const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const vendorController = require("./Controller/vendors");
const customerController = require("./Controller/customer");
const productController = require("./Controller/product");
const orderController = require("./Controller/Orders");
const adminController = require("./Controller/admin");
const path = require("path");

require("./Models/dbConnection");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(cors({ exposedHeaders: "Authorization", origin: "*" }));

app.use("/Images", express.static(path.join(__dirname, "Images")));
app.use("/api/vendors", vendorController);
app.use("/api/customers", customerController);
app.use("/api/products", productController);
app.use("/api/order", orderController);
app.use("/api/admin", adminController);

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.get("/", function (req, res) {
  return res.send("<h1>Hello  world!!!</h1>");
});

app.listen(PORT, function () {
  console.log(`Application is running on ${PORT}`);
});
