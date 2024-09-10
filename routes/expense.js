const express= require('express');
const router = express.Router();

const expressController = require('../controllers/expense')

router.get('/expenses',expressController.getExpenses);
router.get('/expenses/:id',expressController.getExpenseById);
router.post('/expenses',expressController.createExpense);
router.put('/expenses/:id',expressController.editexpense);
router.delete('/expenses/:id',expressController.deleteExpense);

module.exports=router;