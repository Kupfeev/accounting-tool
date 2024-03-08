const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    cost: Number,
    instalment: Number,
    note: String,
});

module.exports = mongoose.model('Expense', expenseSchema);