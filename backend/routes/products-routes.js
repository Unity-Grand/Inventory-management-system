const express = require("express");


const productsControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/all-products", productsControllers.getProducts);

router.post("/upload-product", productsControllers.uploadProduct);

router.patch("/product/:id", productsControllers.updateProduct);

router.delete("/product/:id", productsControllers.deleteProduct);

module.exports = router;

