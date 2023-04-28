const { salesServices } = require('../services');

const saleDone = async (req, res) => {
  const array = req.body;
  const result = await salesServices.postSales(array);
  if (result.type) {
    return res.status(404).json(result);
  }
  return res.status(201).json(result);
};

const salesList = async (_req, res) => {
  const data = await salesServices.getAllSales();
  return res.status(200).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const data = await salesServices.salesById(id);
  if (data.message) {
    return res.status(404).json(data);
  }
  return res.status(200).json(data);
};

module.exports = {
  saleDone,
  salesList,
  getSaleById,
};