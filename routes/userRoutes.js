const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User Routes
router.post("/", userController.create);         // Register a new user
router.get("/", userController.findAll);         // Get all users
router.get("/:id", userController.findOne);      // Get a user by ID
router.put("/:id", userController.update);       // Update a user by ID
router.delete("/:id", userController.delete);    // Delete a user by ID

module.exports = router;
