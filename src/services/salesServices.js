const { salesModels } = require('../models');
const { productModels } = require('../models');

// const postSales = async (sales) => {
//   try {
//     const id = await salesModels.createSale();
//     await Promise.all(sales.map((item) => salesModels.insert(item, id)));
//     return {
//       id,
//       itemsSold: sales,
//     };
//   } catch (error) {
//     console.log(error);
//     throw new Error('Product not found');
//   }
// };

const postSales = async (sales) => {
  const validateProductById = await productModels.getAll();
  const getById = validateProductById.map((item) => item.id);
  const result = !sales.every((item) => getById.includes(item.productId));
  if (result) {
    return { message: 'Product not found' };
  }
  const id = await salesModels.createSale();
  console.log(id);
  await Promise.all(sales.map((item) => salesModels.insert(id, item)));
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