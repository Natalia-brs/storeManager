const express = require('express');
const { productsController } = require('../controllers');
const validate = require('../middlewares/productValidate');

const router = express.Router();

router.get('/', productsController.productsList);

router.get('/:id', productsController.getById);

router.post('/', validate, productsController.postNewProduct);

router.put('/:id', validate, productsController.updateId);

module.exports = router;