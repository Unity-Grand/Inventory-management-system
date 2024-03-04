const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const e = require("express");

const HttpError = require("../models/http-error");

const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const uploadProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const {
    brandName,
    productName,
    basePrice,
    description,
    image,
    quantity,
    category,
  } = req.body;
  const createdProduct = new Product({
    brandName,
    productName,
    basePrice,
    description,
    image,
    quantity,
    category,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdProduct.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again.",
      500
    );
    return next(error);
  }
  res.status(201).json({ product: createdProduct });
};

const updateProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const bookId = req.params.id;
  const updateProductData = req.body;

  const filter = { _id: new mongoose.Types.ObjectId(bookId) };

  const options = { upsert: true };

  const updateDoc = {
    $set: {
      ...updateProductData,
    },
  };
  const result = await Product.updateOne(filter, updateDoc, options);

  res
    .status(201)
    .json({ message: "Product updated successfully!", product: result });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }
  if (!product) {
    const error = new HttpError("Could not find product for this id.", 404);
    return next(error);
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await product.deleteOne({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Deleted product." });
};

exports.getProducts = getProducts;
exports.uploadProduct = uploadProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
