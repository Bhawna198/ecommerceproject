const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController"); // Ensure this path is correct

// Ensure all controller functions exist in cartController
router.post("/add", cartController.create);
router.get("/", cartController.findAll);
router.get("/:id", cartController.findOne);
router.put("/:id", cartController.update);
router.delete("/:id", cartController.delete);

module.exports = router;
