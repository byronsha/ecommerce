var React = require('react'),
    Panel = require('react-bootstrap').Panel,
    Input = require('react-bootstrap').Input,
    ButtonInput = require('react-bootstrap').ButtonInput,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var AddProductForm = React.createClass({
  mixins: [LinkedStateMixin],
  brandDropdown: function () {
    return (
      <Input type="select" label="Brand" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
        <option value="other">...</option>
      </Input>
    )
  },

  categoryDropdown: function () {
    return (
      <Input type="select" label="Category" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </Input>
    )
  },

  render: function () {
    return (
      <div className="col-md-6">
        <Panel collapsible defaultExpanded header="Add item" bsStyle="success">
          <form>
            <Input type="text" label="Name" placeholder="name" />

            {this.brandDropdown()}
            {this.categoryDropdown()}

            <Input type="text" label="Price" placeholder="price" />

            <Input type="textarea" label="Text Area" placeholder="description" />

            <Input type="text" label="Image link" placeholder="image link" />

            <ButtonInput type="reset" value="clear all" />
            <ButtonInput type="submit" value="add item" />
          </form>
        </Panel>
      </div>
    )
  }
});

module.exports = AddProductForm;
