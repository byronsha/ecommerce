var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js'),
    BrandStore = new Store(Dispatcher);

var _brands = [];

BrandStore.all = function () {
  return _brands;
};

BrandStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case Constants.ALL_BRANDS_RECEIVED:
      _brands = payload.brands;
      BrandStore.__emitChange();
      break;
  }
};

module.exports = BrandStore;
