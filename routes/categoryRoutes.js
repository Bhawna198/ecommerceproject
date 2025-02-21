const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Category Routes
router.post("/", categoryController.create);      // Add a new category
router.get("/", categoryController.findAll);      // Get all categories
router.get("/:id", categoryController.findOne);   // Get a category by ID
router.put("/:id", categoryController.update);    // Update a category by ID
router.delete("/:id", categoryController.delete); // Delete a category by ID

module.exports = router;
