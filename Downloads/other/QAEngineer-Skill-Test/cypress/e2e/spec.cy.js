/// <reference types="cypress" />

const { beforeEach } = require("mocha")
const { navigate, chooseProduct, addProduct, registerLogin, Checkout, logOut } = require("../page-object/helpers")

describe('Clothing store website', () => {
  beforeEach (() => {
    navigate()
  })

  it('Product section', () => {
    chooseProduct();
    addProduct();
    registerLogin();
    Checkout();
    logOut();
  });

})