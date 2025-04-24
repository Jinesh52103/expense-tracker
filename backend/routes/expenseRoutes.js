const express = require('express');
const Expense = require("../models/Expense.js")
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

router.post("/", async(req, res) => {
    try{
        const newExpense = new Expense(req.body);
        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense)
    }catch(err){
        res.status(400).json({error: err.message})
    }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;