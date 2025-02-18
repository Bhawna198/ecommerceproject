const express = require("express");
const router = express.Router();
const Country = require("../models/country");

router.get("/", async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;