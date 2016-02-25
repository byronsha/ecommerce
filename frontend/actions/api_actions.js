var Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js'),
    ApiUtil = require('../util/api_util.js');

var ApiActions = {
  // Requests

  fetchAllBrands: function () {
    ApiUtil.fetchAllBrands(ApiActions.receiveAllBrands);
  },

  fetchAllCategories: function () {
    ApiUtil.fetchAllCategories(ApiActions.receiveAllCategories);
  },

  fetchProducts: function (filters) {
    ApiUtil.fetchProducts(filters, ApiActions.receiveProducts);
  },

  // Responses

  receiveAllBrands: function (brands) {
    Dispatcher.dispatch({
      actionType: Constants.ALL_BRANDS_RECEIVED,
      brands: brands
    });
  },

  receiveAllCategories: function (categories) {
    Dispatcher.dispatch({
      actionType: Constants.ALL_CATEGORIES_RECEIVED,
      categories: categories
    });
  },

  receiveProducts: function (products) {
    Dispatcher.dispatch({
      actionType: Constants.PRODUCTS_RECEIVED,
      products: products
    });
  }
};

module.exports = ApiActions;
