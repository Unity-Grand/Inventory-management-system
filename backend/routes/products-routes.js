const express = require("express");
const router = express.Router();
const product = require("../models/product");

router.post("/product", async (req, res) => {
  const product = new product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;