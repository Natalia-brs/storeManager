const { salesModels } = require('../models');

const postSales = async (sales) => {
  try {
    const id = await salesModels.createSale();
    await Promise.all(sales.map((item) => salesModels.insert(item, id)));
    return {
      id,
      itemsSold: sales,
    };
  } catch (error) {
    console.log(error);
    throw new Error('Product not found');
  }
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