const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsServices } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { products, errorMessage } = require('./mocks/productsController.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('testando a camada controller', () => {
  it('retorna status 200 de toda a lista', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getAll')
         .resolves([products]);
    
    await productsController.productsList(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);  
  });

  it('retorna estatus 200 utilizando um id', async () => {
    const res = {};
    const req = {
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'findById')
         .resolves([products[1]]);
    
    await productsController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[1]);
  });

  afterEach(() => {
    sinon.restore();
  });
});