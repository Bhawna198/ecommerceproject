const OrderItem = require("../models/OrderItem");

// Create a new order item
exports.create = async (req, res) => {
    try {
        const orderItem = new OrderItem(req.body);
        await orderItem.save();
        res.status(201).json(orderItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all order items
exports.findAll = async (req, res) => {
    try {
        const items = await OrderItem.find().populate('product');
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a single order item by ID
exports.findOne = async (req, res) => {
    try {
        const item = await OrderItem.findById(req.params.id).populate('product');
        if (!item) return res.status(404).json({ message: "Order Item not found" });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an order item by ID
exports.update = async (req, res) => {
    try {
        const item = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ message: "Order Item not found" });
        res.json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an order item by ID
exports.delete = async (req, res) => {
    try {
        const item = await OrderItem.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: "Order Item not found" });
        res.json({ message: "Order Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
