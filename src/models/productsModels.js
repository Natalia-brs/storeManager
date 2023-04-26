const connection = require('./connection');

const getAll = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return data;
};

const findById = async (id) => {
  const [[data]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return data;
};

module.exports = {
  getAll,
  findById,
};