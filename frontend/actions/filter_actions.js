var Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js');

var FilterActions = {
  updateBrandsFilter: function (brands) {
    Dispatcher.dispatch({
      actionType: Constants.BRANDS_FILTER_RECEIVED,
      brands: brands
    });
  },

  updateCategoriesFilter: function (categories) {
    Dispatcher.dispatch({
      actionType: Constants.CATEGORIES_FILTER_RECEIVED,
      categories: categories
    });
  }
};

module.exports = FilterActions;
