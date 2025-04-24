const express = require("express");
const Income = require("../models/Income");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const income = await Income.find();
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newIncome = new Income(req.body);
    const savedIncome = await newIncome.save();
    res.status(201).json(savedIncome);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
