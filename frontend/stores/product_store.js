var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js'),
    ProductStore = new Store(Dispatcher);

var _products = [];

ProductStore.all = function () {
  return _products;
};

ProductStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case Constants.PRODUCTS_RECEIVED:
      _products = payload.products;
      ProductStore.__emitChange();
      break;
  }
};

module.exports = ProductStore;
