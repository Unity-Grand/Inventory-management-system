const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

  brandName: { type: String, required: true },
  productName: { type: String, required: true },
  basePrice: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);

