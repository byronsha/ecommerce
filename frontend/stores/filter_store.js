var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js'),
    FilterStore = new Store(Dispatcher);

var _filters = {
  brands: [],
  categories: []
};

FilterStore.all = function () {
  return _filters;
};

FilterStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case Constants.BRANDS_FILTER_RECEIVED:
      _filters.brands = payload.brands;
      FilterStore.__emitChange();
      break;
    case Constants.CATEGORIES_FILTER_RECEIVED:
      _filters.categories = payload.categories;
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
