const { productsServices } = require('../services');

const STATUS_OK = 200;

const productsList = async (_req, res) => {
  const data = await productsServices.getAll();
  return res.status(STATUS_OK).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await productsServices.findById(id);
  if (data.message) {
    return res.status(404).json(data);
  }
  return res.status(200).json(data);
};

module.exports = {
  productsList,
  getById,
};