var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllBrands: function (callback) {
    $.ajax({
      url: 'api/brands',
      success: function (brands) {
        callback(brands);
      }
    })
  },

  fetchAllCategories: function (callback) {
    $.ajax({
      url: 'api/categories',
      success: function (categories) {
        callback(categories);
      }
    })
  },

  fetchProducts: function (filters, callback) {
    $.ajax({
      url: 'api/products',
      data: filters,
      success: function (products) {
        callback(products);
      }
    })
  }
};

module.exports = ApiUtil;
