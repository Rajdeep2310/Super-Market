const express = require("express");
const productRouter = express.Router();
const {createProduct , getProductsById} = require("../Controllers/ProductController");

productRouter.post("/create-product", createProduct);
productRouter.get("/get-product/:id", getProductsById);

module.exports = productRouter;