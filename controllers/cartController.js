const Cart = require("../models/Cart");

exports.create = async (req, res) => {
    try {
        const cartItem = await Cart.create(req.body);
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const carts = await Cart.findAll();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        await cartItem.update(req.body);
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const cartItem = await Cart.findByPk(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        await cartItem.destroy();
        res.json({ message: "Cart item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

