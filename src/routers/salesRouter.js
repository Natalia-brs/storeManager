const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.salesList);

router.get('/:id', salesController.getSaleById);

router.post('/', salesController.saleDone);

module.exports = router;