const Payment = require("../models/Payment");

// Create a new payment
async function create(req, res) {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Retrieve all payments
async function findAll(req, res) {
    try {
        const payments = await Payment.find().populate('order');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Retrieve a single payment by ID
async function findOne(req, res) {
    try {
        const payment = await Payment.findById(req.params.id).populate('order');
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a payment by ID
async function update(req, res) {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a payment by ID
async function deletePayment(req, res) {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Add missing methods

async function processPayment(req, res) {
    try {
        // Add payment processing logic here (e.g., using Stripe, PayPal, etc.)
        res.json({ message: "Payment processed successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPaymentDetails(req, res) {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Export functions
module.exports = { create, findAll, findOne, update, deletePayment, processPayment, getPaymentDetails };
