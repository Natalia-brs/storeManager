const { productModels } = require('../models');

const getAll = async () => {
  const products = await productModels.getAll();
  return products;
};

const findById = async (id) => {
  const productId = await productModels.findById(id);
  if (!productId) {
    return {
      message: 'Product not found',
    };
  }
  return productId;
};

module.exports = {
  getAll,
  findById,
};