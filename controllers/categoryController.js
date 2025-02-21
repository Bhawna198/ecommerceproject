const Category = require("../models/Category");

// Create a new category
exports.create = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all categories
exports.findAll = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a category by ID
exports.findOne = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a category by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Category.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCategory = await Category.findByPk(req.params.id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a category by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Category.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json({ message: "Category deleted" });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
