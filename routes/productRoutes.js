const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product Routes
router.post("/", productController.create);      // Add a new product
router.get("/", productController.findAll);      // Get all products
router.get("/:id", productController.findOne);   // Get a product by ID
router.put("/:id", productController.update);    // Update a product by ID
router.delete("/:id", productController.delete); // Delete a product by ID

module.exports = router;
