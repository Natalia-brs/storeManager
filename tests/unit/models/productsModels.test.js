const { expect } = require('chai');
const sinon = require('sinon');
const { productModels } = require('../../../src/models/');
const connection = require('../../../src/models/connection');
const { products } = require('./mocks/productModels.mock');

describe('Teste na model-products', () => {
  it('Trazendo todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([products]);

    const data = await productModels.getAll();

    expect(data).to.be.deep.equal(products);
  });

  it('Trazendo através de um id', async () => {
    sinon.stub(connection, 'execute').resolves([products[1]]);

    const data = await productModels.findById(1);

    expect(data).to.be.deep.equal(products[1]);
  });

  afterEach(() => {
    sinon.restore();
  });
});

