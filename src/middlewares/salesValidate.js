const salesValidate = (req, res, next) => {
  const array = req.body;
  const fields = ['productId', 'quantity'];
  const isField = fields.find((prop) => array.some((item) => !(prop in item)));
  if (isField) {
    return res.status(400).json({ message: `"${isField}" is required` });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const array = req.body;
  const isFieldLength = array.some((item) => item.quantity < 1);
  if (isFieldLength) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  salesValidate,
  validateQuantity,
};