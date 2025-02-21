const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Order Routes
router.post("/", orderController.create);        // Place a new order
router.get("/", orderController.findAll);        // Get all orders
router.get("/:id", orderController.findOne);     // Get an order by ID
router.put("/:id", orderController.update);      // Update an order by ID
router.delete("/:id", orderController.delete);   // Cancel/Delete an order by ID

module.exports = router;
