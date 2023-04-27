const camelize = require('camelize');
const connection = require('./connection');

const createSale = async () => {
  // const date = new Date();
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (default)',
    [],
  );
  return { insertId };
};

const insert = async ({ productId, quantity }, salesId) => {
   await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [salesId, productId, quantity],
  );
  return { productId, quantity };
};

const getAllSales = async () => {
  const [data] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON sp.sale_id = s.id`,
  );
  return camelize(data);
};

const salesById = async (id) => {
  const [data] = await connection.execute(
    `SELECT s.date, sp.product_id, sp.quantity 
      FROM StoreManager.sales AS s
      INNER JOIN StoreManager.sales_products AS sp
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?
      ORDER BY sp.sale_id, sp.product_id`,
    [id],
  );
  return camelize(data);
};

module.exports = {
  createSale,
  insert,
  getAllSales,
  salesById,
};