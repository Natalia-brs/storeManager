const express = require('express');
const { salesController } = require('../controllers');
const { salesValidate, validateQuantity } = require('../middlewares/salesValidate');

const router = express.Router();

router.get('/', salesController.salesList);

router.get('/:id', salesController.getSaleById);

router.post('/', salesValidate, validateQuantity, salesController.saleDone);

module.exports = router;