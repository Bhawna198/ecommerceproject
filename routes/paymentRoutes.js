const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController"); // Ensure correct path

// Ensure all controller functions exist in paymentController
router.post("/process", paymentController.processPayment);
router.get("/:id", paymentController.getPaymentDetails);

module.exports = router;
