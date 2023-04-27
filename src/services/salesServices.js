const { salesModels } = require('../models');

const postSales = async (sales) => {
  const id = await salesModels.createSale();
    await Promise.all(sales.map((item) => salesModels.insert(item, id)));
  return {
    id,
    itemsSold: sales,
  };
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