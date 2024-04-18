const express = require("express");
const productRouter = express.Router();
const {createProduct , getProductsById , getAllProducts} = require("../Controllers/ProductController");

productRouter.post("/create-product", createProduct);
productRouter.get("/get-product/:id", getProductsById);
productRouter.get("/products", getAllProducts);
module.exports = productRouter;