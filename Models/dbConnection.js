const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Group8:CapstoneProject@cluster0.rzzbl52.mongodb.net/Farmers_bazzar?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", function () {
  console.log("Application is connected to Databse");
});
