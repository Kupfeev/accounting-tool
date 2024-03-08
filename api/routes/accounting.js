const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Expense = require('../models/expense');

router.get('/', (req, res, next) => {
    Expense.find().exec()
    .then( docs => {
        res.status(200).json(docs);
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

router.post('/', (req, res, next) => {
    const { name, cost, instalment, note } = req.body;
    const newExpense = new Expense({
        _id: new mongoose.Types.ObjectId(),
        name,
        cost,
        instalment,
        note
    });
    newExpense.save()
    .then( resp => {
        res.status(201).json({
            message: 'Expense created!',
            newExpense
        });
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

router.get('/:expenseId', (req, res, next) => {
    const id = req.params.expenseId;
    Expense.findById(id).exec()
    .then( doc => {
        res.status(200).json(doc);
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

router.patch('/:expenseId', (req, res, next) => {
    const id = req.params.expenseId;
    Expense.updateOne({ _id: id }, req.body).exec()
    .then( resp => {
        res.status(200).json({
            message: `Expense ${id} updated!`,
        })
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

router.delete('/:expenseId', (req, res, next) => {
    const id = req.params.expenseId;
    Expense.deleteOne({ _id: id }).exec()
    .then( resp => {
        res.status(202).json({
            message: `Deleted expense with id ${id}`,
        });
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;