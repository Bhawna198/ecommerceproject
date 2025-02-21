const Order = require("../models/Order");

exports.create = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        order ? res.status(200).json(order) : res.status(404).json({ message: "Order not found" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Order.update(req.body, { where: { id: req.params.id } });
        updated ? res.status(200).json(await Order.findByPk(req.params.id)) : res.status(404).json({ message: "Order not found" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Order.destroy({ where: { id: req.params.id } });
        deleted ? res.status(204).json({ message: "Order deleted" }) : res.status(404).json({ message: "Order not found" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
