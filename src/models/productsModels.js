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

const put = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return {
    id: insertId,
    name,
  };
};

const updateId = async (name, id) => {
    await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
};

module.exports = {
  getAll,
  findById,
  put,
  updateId,
};