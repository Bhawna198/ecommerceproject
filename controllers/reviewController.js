const Review = require("../models/Review");

// Create a new review
exports.create = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all reviews
exports.findAll = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user product');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a single review by ID
exports.findOne = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('user product');
        if (!review) return res.status(404).json({ message: "Review not found" });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a review by ID
exports.update = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!review) return res.status(404).json({ message: "Review not found" });
        res.json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a review by ID
exports.delete = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: "Review not found" });
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
