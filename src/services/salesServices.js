const { salesModels } = require('../models');

const postSales = async (sales) => {
  const { insertd } = await salesModels.createSale();
  const sale = sales.map((item) => salesModels.insert(item, insertd));
  const promise = await Promise.all(sale);
  
  const result = {
    id: insertd,
    itemsSold: promise,
  };
  return result;
};

const getAllSales = async () => {
  const data = await salesModels.getAllSales();
  return data;
};

const salesById = async (id) => {
  const data = await salesModels.salesById(id);
  if (!data.length) {
    return {
      message: 'Sale not found',
    };
  }
  return data;
};

module.exports = {
  postSales,
  getAllSales,
  salesById,
};