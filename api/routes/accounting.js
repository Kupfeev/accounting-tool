const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        expenses: [
            {
                expenseId: 1,
                name: 'Abono celular',
                amount: 12000.00,
                instalment: null,
                note: ''
            },
            {
                expenseId: 2,
                name: 'Internet',
                amount: 8000.00,
                instalment: null,
                note: ''
            },
            {
                expenseId: 3,
                name: 'Compra celular',
                amount: 50000.00,
                instalment: 6,
                note: ''
            },
        ]
    });
});

router.post('/', (req, res, next) => {
    const expense = {
        expenseId: req.body.expenseId,
        name: req.body.name
    };
    res.status(201).json({
        message: 'Expense created!',
        expense
    });
});

router.get('/:expenseId', (req, res, next) => {
    res.status(200).json({
        expenseId: 1,
        name: 'Abono celular',
        amount: 12000.00,
        instalment: null,
        note: ''
    });
});

router.patch('/:expenseId', (req, res, next) => {
    res.status(200).json({
        message: 'Expense updated!'
    });
});

router.delete('/:expenseId', (req, res, next) => {
    res.status(200).json({
        message: 'Expense deleted!'
    });
});

module.exports = router;