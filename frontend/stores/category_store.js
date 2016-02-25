var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher.js'),
    Constants = require('../constants/constants.js'),
    CategoryStore = new Store(Dispatcher);

var _categories = [];

CategoryStore.all = function () {
  return _categories;
};

CategoryStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case Constants.ALL_CATEGORIES_RECEIVED:
      _categories = payload.categories;
      CategoryStore.__emitChange();
      break;
  }
};

module.exports = CategoryStore;
