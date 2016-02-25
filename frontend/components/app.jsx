var React = require('react'),
    PageHeader = require('react-bootstrap').PageHeader;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <PageHeader>THE STORE <small>Buy things here!</small></PageHeader>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
