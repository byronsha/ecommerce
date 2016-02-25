var React = require('react'),
    ApiActions = require('../../actions/api_actions.js'),
    FilterActions = require('../../actions/filter_actions.js'),
    Panel = require('react-bootstrap').Panel,
    CheckboxGroup = require('react-checkbox-group');

var Filters = React.createClass({
  render: function () {
    return (
      <div className="col-md-3">
        <Panel collapsible defaultExpanded header="Brands" bsStyle="primary">
          <CheckboxGroup
            name="brands"
            ref="brandsGroup"
            onChange={this.handleBrandsChange}>
            <div>
              {
                this.props.brands.map(function (brand, idx) {
                  return (
                    <div key={idx}>
                      <label>
                        <input type="checkbox" value={brand.name} /> {brand.name}
                      </label>
                    </div>
                  )
                })
              }
            </div>
          </CheckboxGroup>
        </Panel>

        <Panel collapsible defaultExpanded header="Categories" bsStyle="primary">
          <CheckboxGroup
            name="categories"
            ref="categoriesGroup"
            onChange={this.handleCategoriesChange}>
            <div>
              {
                this.props.categories.map(function (category, idx) {
                  return (
                    <div key={idx}>
                      <label>
                        <input type="checkbox" value={category.name} /> {category.name}
                      </label>
                    </div>
                  )
                })
              }
            </div>
          </CheckboxGroup>
        </Panel>
      </div>
    )
  },

  handleBrandsChange: function () {
    FilterActions.updateBrandsFilter(this.refs.brandsGroup.getCheckedValues());
  },

  handleCategoriesChange: function () {
    FilterActions.updateCategoriesFilter(this.refs.categoriesGroup.getCheckedValues());
  }
});

module.exports = Filters;
