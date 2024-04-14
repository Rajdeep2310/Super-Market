const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg",
  },
});


const Product = mongoose.model("Product", productSchema);
module.exports = Product;