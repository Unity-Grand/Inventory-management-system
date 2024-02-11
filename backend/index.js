const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/products-routes");

const app = express();
app.use(bodyParser.json());

app.use("/api/products/", productRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(
    "mongodb+srv://username:username@cluster0.j0u16ev.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(5000);
  });
