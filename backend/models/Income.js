const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  amount: { type: Number, required: true }
});

module.exports = mongoose.model("Income", IncomeSchema);
