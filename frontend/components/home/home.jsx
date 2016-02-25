var React = require('react'),
    Filters = require('./filters.jsx'),
    ProductList = require('./product_list.jsx'),
    AddProductForm = require('./add_product_form.jsx'),
    BrandStore = require('../../stores/brand_store.js'),
    CategoryStore = require('../../stores/category_store.js'),
    ProductStore = require('../../stores/product_store.js'),
    FilterStore = require('../../stores/filter_store.js'),
    ApiActions = require('../../actions/api_actions.js');

var Home = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      brands: BrandStore.all(),
      categories: CategoryStore.all(),
      products: ProductStore.all()
    }
  },

  componentDidMount: function () {
    this.brandListener = BrandStore.addListener(this._onChange);
    this.categoryListener = CategoryStore.addListener(this._onChange);
    this.productsListener = ProductStore.addListener(this._onChange);
    this.filtersListener = FilterStore.addListener(this._onFiltersChange);

    ApiActions.fetchAllBrands();
    ApiActions.fetchAllCategories();
    ApiActions.fetchProducts(FilterStore.all());
  },

  componentWillUnmount: function () {
    this.brandListener.remove();
    this.categoryListener.remove();
    this.productsListener.remove();
    this.filtersListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _onFiltersChange: function () {
    ApiActions.fetchProducts(FilterStore.all());
  },

  render: function () {
    return (
      <div>
        <div className="row">
          <Filters brands={this.state.brands} categories={this.state.categories} />
          <ProductList products={this.state.products} />
        </div>

        <div className="row">
          <AddProductForm brands={this.state.brands} categories={this.state.categories} />
        </div>
      </div>
    )
  }
});

module.exports = Home;
