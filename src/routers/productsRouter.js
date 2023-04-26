const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.productsList);

router.get('/:id', productsController.getById);

router.post('/', productsController.postNewProduct);

module.exports = router;