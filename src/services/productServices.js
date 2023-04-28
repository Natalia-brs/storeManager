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

const update = async (name, id) => {
  const getId = await productModels.findById(id);
  if (!getId) {
    return { 
      message: 'Product not found',
    }; 
  }
   await productModels.updateId(name, id);

  return {
    id,
    name,
  };
};

module.exports = {
  getAll,
  findById,
  put,
  update,
};