const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productModels } = require('../../../src/models/');
const { products } = require('./mocks/productServices.mock');


describe('Teste da camada services', () => {
  it('Traz a lista completa de produtos', async () => {
    sinon.stub(productModels, 'getAll').resolves(products);

    const data = await productsServices.getAll();

    expect(data).to.deep.equal(products);
  });

  it('validando o id', async () => {
    const data = await productsServices.findById(12258);

    expect(data.message).to.equal('Product not found');
  });

  it('caso id seja valido', async () => {
    sinon.stub(productModels, 'findById').resolves(products[1]);

    const data = await productsServices.findById(1);

    expect(data).to.deep.equal(products[1]);
  });

  afterEach(() => {
    sinon.restore();
  });
});