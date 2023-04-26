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

const put = async (product) => {
  const newProduct = await productModels.put(product);
  return newProduct;
};

module.exports = {
  getAll,
  findById,
  put,
};